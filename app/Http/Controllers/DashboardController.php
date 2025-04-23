<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Organization;
use App\Models\Post;
use App\Models\Project;
use Illuminate\Support\Facades\Concurrency;
use Msamgan\Lact\Attributes\Action;

class DashboardController extends Controller
{
    #[Action(middleware: ['auth'])]
    public function dashboardData(): array
    {
        [$client, $organization, $publishedPosts, $draftPosts, $projects] = Concurrency::run([
            fn () => Client::query()->orderBy('created_at', 'desc')->count(),
            fn () => Organization::query()->orderBy('created_at', 'desc')->count(),
            fn () => Post::query()->where('status', 'published')->count(),
            fn () => Post::query()->where('status', 'draft')->count(),
            fn () => Project::query()->orderBy('created_at', 'desc')->get()->groupBy('status'),
        ]);

        return [
            'client' => $client,
            'organization' => $organization,
            'publishedPosts' => $publishedPosts,
            'draftPosts' => $draftPosts,
            'projects' => $projects,
        ];
    }
}
