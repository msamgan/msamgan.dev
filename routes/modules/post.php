<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('posts', [PostController::class, 'index'])
        ->middleware([PermissionEnum::PostList->can()])
        ->name('post.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::post('post/store', [PostController::class, 'store'])
        ->middleware([PermissionEnum::PostCreate->can()])
        ->name('post.store');

    Route::post('post/update/{post}', [PostController::class, 'update'])
        ->middleware([PermissionEnum::PostUpdate->can()])
        ->name('post.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('service/posts', [PostController::class, 'posts'])
        ->middleware([PermissionEnum::PostList->can()])
        ->name('service.posts');

    Route::get('service/post/last', [PostController::class, 'last'])
        ->middleware([PermissionEnum::PostCreate->can()])
        ->name('service.post.last');

    Route::get('service/post/show/{post}', [PostController::class, 'show'])
        ->middleware([PermissionEnum::PostUpdate->can()])
        ->name('service.post.show');

    Route::delete('service/post/destroy/{post}', [PostController::class, 'destroy'])
        ->middleware([PermissionEnum::PostDelete->can()])
        ->name('service.post.destroy');
});
