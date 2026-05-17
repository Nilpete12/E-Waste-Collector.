<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Home Page
Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/locator', function () {
    return Inertia::render('Facility/Locator');
});

Route::get('/education', function () {
    return Inertia::render('DeviceEducation');
});

// User Dashboard (Clerk protects this on the frontend)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

// Pickup Request Form
Route::get('/pickup/create', function () {
    return Inertia::render('SchedulePickup');
});

Route::get('/privacy', function () {
    return Inertia::render('Legal/Privacy');
});

Route::get('/terms', function () {
    return Inertia::render('Legal/Terms');
});

Route::get('/contact', function () {
    return Inertia::render('Support/Contact');
});

// Admin Routes
Route::get('/admin/dashboard', function () {
    return Inertia::render('AdminDashboard');
});

Route::get('/admin/facilities', function () {
    return Inertia::render('FacilityManager');
});

Route::get('/admin/users', function () {
    return Inertia::render('UserManager');
});

Route::get('/admin/education', function () {
    return Inertia::render('ContentManager');
});



// (You can leave the rest of the file as-is for now)
require __DIR__.'/auth.php';