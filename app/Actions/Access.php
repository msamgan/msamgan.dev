<?php

namespace App\Actions;

class Access
{
    public static function businessCheck(?int $businessId): bool
    {
        if (auth()->user()->business_id !== $businessId) {
            abort(403, 'You do not have access');
        }

        return true;
    }
}
