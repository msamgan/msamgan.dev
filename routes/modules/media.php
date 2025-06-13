<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('media', [MediaController::class, 'index'])
        ->middleware([PermissionEnum::MediaList->can()])
        ->name('media.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::post('media/store', [MediaController::class, 'store'])
        ->middleware([PermissionEnum::MediaCreate->can()])
        ->name('media.store');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('service/media', [MediaController::class, 'media'])
        ->middleware([PermissionEnum::MediaList->can()])
        ->name('service.media');

    Route::delete('service/media/destroy', [MediaController::class, 'destroy'])
        ->middleware([PermissionEnum::MediaDelete->can()])
        ->name('service.media.destroy');
});
