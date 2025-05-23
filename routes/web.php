<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => redirect('login'))->name('welcome');
Route::inertia('dashboard', 'Dashboard')->middleware(['auth', 'verified'])->name('dashboard');
