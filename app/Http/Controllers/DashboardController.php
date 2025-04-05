<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Organization;
use App\Models\Post;
use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard');
    }

    public function dashboardData(): array
    {
        $projects = Project::query()->orderBy('created_at', 'desc')->get()->groupBy('status');
        $client = Client::query()->orderBy('created_at', 'desc')->count();
        $organization = Organization::query()->orderBy('created_at', 'desc')->count();
        $publishedPosts = Post::query()->where('status', 'published')->count();
        $draftPosts = Post::query()->where('status', 'draft')->count();

        return [
            'projects' => $projects,
            'client' => $client,
            'organization' => $organization,
            'publishedPosts' => $publishedPosts,
            'draftPosts' => $draftPosts,
        ];
    }
}
