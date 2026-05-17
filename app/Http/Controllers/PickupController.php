<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PickupRequest;
use Illuminate\Support\Str;

class PickupController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validate the incoming React data
        $validated = $request->validate([
            'userName' => 'required|string',
            'userEmail' => 'required|email',
            'deviceType' => 'required|string',
            'condition' => 'required|string',
            'address' => 'required|string',
            'pincode' => 'required|string',
            'date' => 'required|date',
            'timeSlot' => 'required|string',
        ]);

        // 2. Generate a professional Request ID (e.g., PK-A7F92)
        $requestId = 'PK-' . strtoupper(Str::random(5));

        // 3. Save to the SQLite Database
        PickupRequest::create([
            'request_id' => $requestId,
            'user_name' => $validated['userName'],
            'user_email' => $validated['userEmail'],
            'device_type' => $validated['deviceType'],
            'condition' => $validated['condition'],
            'address' => $validated['address'],
            'pincode' => $validated['pincode'],
            'scheduled_date' => $validated['date'],
            'time_slot' => $validated['timeSlot'],
            'status' => 'Pending',
        ]);

        // 4. Tell React it was successful!
        return redirect()->back();
    }
}