<?php

namespace App\Actions\Project;

use App\Models\Project;

class CreateProject
{
    public function handle(array $data): Project
    {
        return Project::query()->create($data);
    }
}
