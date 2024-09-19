<?php

namespace App\Actions\Organization;

use App\Models\Organization;

class UpdateOrganization
{
    public function handle(Organization $organization, array $data): Organization
    {
        $organization->update($data);

        return $organization;
    }
}
