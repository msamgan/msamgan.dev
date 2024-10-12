<?php

namespace App\Actions\Organization;

use App\Models\Organization;

class UpdateOrganization extends \App\Models\Organization
{
    public function handle(Organization $organization, array $data): Organization
    {
        $organization->update($data);

        return $organization->refresh();
    }
}
