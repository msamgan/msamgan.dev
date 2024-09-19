<?php

namespace App\Actions\Notification;

use App\Actions\Business\BusinessUser;

class NotifyBusiness
{
    public function handle($instance): void
    {
        (new BusinessUser)->handle()->notify($instance);
    }
}
