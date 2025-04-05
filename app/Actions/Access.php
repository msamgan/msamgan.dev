<?php

namespace App\Actions;

class Access
{
    public static function businessCheck(?int $businessId, $abort = true): bool
    {
        if (auth()->user()->business_id !== $businessId) {
            abort_if($abort, 403, 'You do not have access');

            return false;
        }

        return true;
    }
}
