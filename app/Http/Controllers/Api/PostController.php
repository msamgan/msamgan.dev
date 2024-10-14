<?php

namespace App\Http\Controllers\Api;

use App\Actions\Post\FetchNonPaginatedPosts;
use App\Actions\Post\FetchPaginatedPosts;
use App\Actions\Post\FetchPost;
use App\Actions\Post\FetchPostsByTag;
use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    public function tagList(): Collection
    {
        return Tag::query()->withCount('posts')->get();
    }

    public function postList(FetchNonPaginatedPosts $posts): JsonResponse
    {
        return response()->json($posts->handle(query: request('query')));
    }

    public function postListPaginated(FetchPaginatedPosts $posts): JsonResponse
    {
        return response()->json($posts->handle(query: request('query'), page: request('page') ?? 1));
    }

    public function postShow(FetchPost $post): JsonResponse
    {
        return $post->handle(slug: request('slug'));
    }

    public function postTag(FetchPostsByTag $posts): JsonResponse
    {
        return $posts->handle(query: request('query'));
    }
}
