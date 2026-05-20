<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL; // 👈 1. Add this import at the top

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // 👈 2. Force HTTPS if we are not on our local computer
        if (env('APP_ENV') !== 'local') {
            URL::forceScheme('https');
        }
    }
}