<?php

namespace App\Actions\Notification;

class NotifyUser
{
    public function handle($instance): void
    {
        auth()->user()->notify($instance);

        if (! auth()->user()->isBusiness()) {
            (new NotifyBusiness)->handle($instance);
        }
    }
}
