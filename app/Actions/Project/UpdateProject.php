<?php

namespace App\Actions\Project;

use App\Models\Project;

class UpdateProject extends Project
{
    public function handle(Project $project, array $data): Project
    {
        $project->update($data);

        return $project->refresh();
    }
}
