<?php

namespace App\Actions\Business;

use App\Models\Business;

class UpdateBusiness
{
    public function handle(Business $business, array $data): Business
    {
        $business->update($data);

        return $business;
    }
}
