<?php

use App\Http\Controllers\PermissionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function (): void {
    Route::get('service/permissions', [PermissionController::class, 'permissions'])
        ->name('service.permissions');
});
