<?php

namespace App\Actions\Business;

use App\Models\Business;
use App\Models\User;

class CreateBusiness
{
    public function handle(User $user, string $businessName, bool $makeBusinessActive = false): Business
    {
        $business = Business::create([
            'user_id' => $user->id,
            'name' => $businessName,
        ]);

        if ($makeBusinessActive) {
            $user->business_id = $business->id;
            $user->save();
        }

        return $business;
    }
}
