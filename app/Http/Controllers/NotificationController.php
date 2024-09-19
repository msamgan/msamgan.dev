<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class NotificationController extends Controller
{
    public function index(): Response
    {
        auth()->user()->unreadNotifications->markAsRead();

        return Inertia::render('Notifications');
    }
}
