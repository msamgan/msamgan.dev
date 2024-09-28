<?php

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Project\CreateProject;
use App\Actions\Project\UpdateProject;
// use App\Http\Requests\DeleteProjectRequest;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use App\Notifications\ProjectCreated;
// use App\Notifications\ProjectDeleted;
use App\Notifications\ProjectUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Project/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StoreProjectRequest $request, CreateProject $createProject, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $project = $createProject->handle($request->validated());

            $notifyUser->handle(new ProjectCreated(auth()->user()));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(Project $project): Project
    {
        // Access::businessCheck(businessId: $user->business_id);

        return $project;
    }

    public function update(UpdateProjectRequest $request, Project $project, UpdateProject $updateProject, NotifyUser $notifyUser): void
    {
        $updateProject->handle($project, $request->validated());

        $notifyUser->handle(new ProjectUpdated(auth()->user()));
    }

    /*public function destroy(DeleteProjectRequest $request, Project $project, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new ProjectDeleted(auth()->user()));

        $project->delete();
    }*/

    public function projects(): Collection
    {
        return Project::query()->get();
    }
}
