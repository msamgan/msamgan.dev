<?php

namespace App\Actions\Organization;

use App\Models\Organization;

class CreateOrganization
{
    public function handle(array $data): Organization
    {
        return Organization::create($data);
    }
}
