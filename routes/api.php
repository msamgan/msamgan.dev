<?php

use App\Http\Controllers\Api\PostController;
use Illuminate\Support\Facades\Route;

Route::get('tag/list', [PostController::class, 'tagList'])->name('api.tag.list');
Route::get('post/list', [PostController::class, 'postList'])->name('api.post.list');
Route::get('post/list/paginated', [PostController::class, 'postListPaginated'])->name('api.post.list.paginated');
Route::get('post/{slug}', [PostController::class, 'postShow'])->name('api.post.show');
Route::get('post/tag/{tag}', [PostController::class, 'postTag'])->name('api.post.tag');
