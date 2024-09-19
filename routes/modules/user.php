<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('users', [UserController::class, 'index'])
        ->middleware([PermissionEnum::UserList->can()])
        ->name('user.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::post('user/store', [UserController::class, 'store'])
        ->middleware([PermissionEnum::UserCreate->can()])
        ->name('user.store');

    Route::post('user/update/{user}', [UserController::class, 'update'])
        ->middleware([PermissionEnum::UserUpdate->can()])
        ->name('user.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('service/users', [UserController::class, 'users'])
        ->middleware([PermissionEnum::UserList->can()])
        ->name('service.users');

    Route::get('service/user/show/{user}', [UserController::class, 'show'])
        ->middleware([PermissionEnum::UserUpdate->can()])
        ->name('service.user.show');

    Route::delete('service/user/destroy/{user}', [UserController::class, 'destroy'])
        ->middleware([PermissionEnum::UserDelete->can()])
        ->name('service.user.destroy');
});
