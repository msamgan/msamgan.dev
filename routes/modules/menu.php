<?php

use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function (): void {
    Route::get('service/menu', [MenuController::class, 'index'])
        ->name('service.menu');
});
