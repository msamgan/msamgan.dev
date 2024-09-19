<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\BusinessController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('business/settings', [BusinessController::class, 'settings'])
        ->middleware([PermissionEnum::BusinessUpdate->can(), 'check_has_business'])
        ->name('business.settings');
});

Route::middleware(['auth'])->group(function () {
    Route::post('business/update/{business}', [BusinessController::class, 'update'])
        ->middleware([PermissionEnum::BusinessUpdate->can(), 'check_has_business'])
        ->name('business.update');
});
