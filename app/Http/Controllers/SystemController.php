<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PickupRequest;
use App\Models\PlatformUser;

class SystemController extends Controller
{
    // 1. SILENT SYNC: Mirrors Clerk users into your local database
    public function syncUser(Request $request)
    {
        $user = PlatformUser::updateOrCreate(
            ['email' => $request->email], 
            [
                'clerk_id' => $request->clerk_id,
                'name' => $request->name,
                'role' => $request->role
            ]
        );
        return response()->json(['success' => true]);
    }

    // 2. ADMIN ACTIONS: Change status and get all platform data
    public function updatePickupStatus(Request $request)
    {
        $pickup = PickupRequest::find($request->id);
        if ($pickup) {
            $pickup->status = $request->status;
            $pickup->save();
        }
        return response()->json(['success' => true]);
    }

    public function getAdminData()
    {
        // Admin sees EVERYTHING from EVERYONE
        $allPickups = PickupRequest::orderBy('created_at', 'desc')->get();
        $allUsers = PlatformUser::orderBy('created_at', 'desc')->get();

        return response()->json([
            'pickups' => $allPickups,
            'users' => $allUsers
        ]);
    }

    // 3. USER DASHBOARD: Calculates dynamic stats and the global leaderboard
    public function getUserDashboard(Request $request)
    {
        $email = $request->query('email');
        if (!$email) return response()->json(['error' => 'No email provided']);

        // A. Calculate Current User's Stats
        $myPickups = PickupRequest::where('user_email', $email)->orderBy('created_at', 'desc')->get();
        
        $points = 0; $co2Saved = 0; $metalsYield = 0; $devicesRecycled = 0;

        foreach ($myPickups as $p) {
            if ($p->status === 'Completed') {
                $devicesRecycled++;
                if ($p->device_type === 'laptop') {
                    $points += 500; $co2Saved += 25.5; $metalsYield += 96.4;
                } elseif ($p->device_type === 'mobile') {
                    $points += 150; $co2Saved += 5.2; $metalsYield += 16.4;
                } else {
                    $points += 200; $co2Saved += 10.0; $metalsYield += 35.0;
                }
            }
        }

        // B. Calculate Global Leaderboard (Everyone in the platform_users table)
        $allUsers = PlatformUser::all();
        $allCompletedPickups = PickupRequest::where('status', 'Completed')->get();
        
        $leaderboard = [];

        // Give everyone a starting score of 0
        foreach ($allUsers as $u) {
            $leaderboard[$u->email] = ['name' => $u->name, 'email' => $u->email, 'points' => 0];
        }

        // Add points based on completed pickups
        foreach ($allCompletedPickups as $ac) {
            // Failsafe in case a pickup exists but the user hasn't synced properly
            if (!isset($leaderboard[$ac->user_email])) {
                $leaderboard[$ac->user_email] = ['name' => $ac->user_name, 'email' => $ac->user_email, 'points' => 0];
            }
            
            if ($ac->device_type === 'laptop') $leaderboard[$ac->user_email]['points'] += 500;
            elseif ($ac->device_type === 'mobile') $leaderboard[$ac->user_email]['points'] += 150;
            else $leaderboard[$ac->user_email]['points'] += 200;
        }

        // Sort Highest to Lowest
        usort($leaderboard, fn($a, $b) => $b['points'] <=> $a['points']);

        // Format for React (Assign ranks and badges)
        $finalLeaderboard = [];
        $rank = 1;
        foreach (array_slice($leaderboard, 0, 10) as $lb) { // Top 10
            $badge = 'Eco Beginner';
            if ($lb['points'] >= 1000) $badge = 'Green Warrior';
            if ($lb['points'] >= 5000) $badge = 'Earth Saver';

            $finalLeaderboard[] = [
                'rank' => $rank++,
                'name' => $lb['name'],
                'points' => $lb['points'],
                'badge' => $badge,
                'isCurrentUser' => ($lb['email'] === $email)
            ];
        }

        return response()->json([
            'stats' => [
                'points' => number_format($points),
                'co2' => number_format($co2Saved, 1),
                'metals' => number_format($metalsYield / 1000, 2), // Convert g to kg
                'devices' => $devicesRecycled,
            ],
            'myPickups' => $myPickups,
            'leaderboard' => $finalLeaderboard
        ]);
    }
}