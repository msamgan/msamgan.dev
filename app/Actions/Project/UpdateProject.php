<?php

namespace App\Actions\Project;

use App\Models\Project;

class UpdateProject
{
    public function handle(Project $project, array $data): Project
    {
        $project->update($data);

        return $project;
    }
}
