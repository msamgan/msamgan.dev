<?php

namespace App\Actions\Organization;

use App\Models\Organization;

class UpdateOrganization extends Organization
{
    public function handle(Organization $organization, array $data): Organization
    {
        $organization->update($data);

        return $organization->refresh();
    }
}
