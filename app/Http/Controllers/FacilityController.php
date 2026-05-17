<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function search(Request $request)
    {
        $userLat = $request->query('lat');
        $userLng = $request->query('lng');

        // 1. Get all active facilities from SQLite (no complex math yet)
        $facilities = Facility::where('status', 'Active')->get();

        // 2. If the user searched a location, do the GPS math in PHP!
        if ($userLat && $userLng) {
            $facilities = $facilities->map(function ($facility) use ($userLat, $userLng) {
                // Haversine Formula in PHP
                $earthRadius = 6371; // Kilometers
                
                $latFrom = deg2rad($userLat);
                $lonFrom = deg2rad($userLng);
                $latTo = deg2rad($facility->lat);
                $lonTo = deg2rad($facility->lng);

                $latDelta = $latTo - $latFrom;
                $lonDelta = $lonTo - $lonFrom;

                $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) + cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
                
                // Attach the calculated distance to the facility object
                $facility->distance = $angle * $earthRadius;
                
                return $facility;
            })
            ->sortBy('distance') // Sort by closest
            ->values() // Reset array keys for JSON
            ->take(10); // Take top 10 closest
        }

        return response()->json($facilities);
    }
}