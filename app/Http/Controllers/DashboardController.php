<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Organization;
use App\Models\Post;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;
use Msamgan\Lact\Attributes\Action;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'projects' => Project::query()->orderBy('created_at', 'desc')->get()->groupBy('status'),
        ]);
    }

    #[Action(method: 'get', middleware: ['web', 'auth'])]
    public function dashboardData(): array
    {
        $client = Client::query()->orderBy('created_at', 'desc')->count();
        $organization = Organization::query()->orderBy('created_at', 'desc')->count();
        $publishedPosts = Post::query()->where('status', 'published')->count();
        $draftPosts = Post::query()->where('status', 'draft')->count();

        return [
            'client' => $client,
            'organization' => $organization,
            'publishedPosts' => $publishedPosts,
            'draftPosts' => $draftPosts,
        ];
    }
}
