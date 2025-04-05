<?php

namespace App\Http\Controllers\Api;

use App\Actions\Post\FetchNonPaginatedPosts;
use App\Actions\Post\FetchPaginatedPosts;
use App\Actions\Post\FetchPost;
use App\Actions\Post\FetchPostsByTag;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    public function tagList(): Collection
    {
        $tags = Tag::query()->withCount('posts')->get();

        return $tags->filter(fn ($tag): bool => $tag->posts_count > 0);
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
        $postData = $post->handle(slug: request('slug'));

        if (! $postData instanceof Post) {
            return response()->json(['status' => false, 'message' => 'Post not found'], 404);
        }

        return response()->json($postData);
    }

    public function postTag(FetchPostsByTag $posts): JsonResponse
    {
        $postsData = $posts->handle(tag: request('tag'), query: request('q'));

        if ($postsData->isEmpty()) {
            return response()->json(['status' => false, 'message' => 'Posts not found'], 404);
        }

        return response()->json($postsData);
    }
}
