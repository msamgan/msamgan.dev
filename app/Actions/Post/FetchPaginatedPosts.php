<?php

namespace App\Actions\Post;

use App\Queries\FetchPosts;
use Illuminate\Support\Facades\Cache;

class FetchPaginatedPosts
{
    public function handle(?string $query = null, int $page = 1)
    {
        $cacheKey = $query ? 'posts_paginated_' . $query . '_page_' . $page : 'posts_paginated_page_' . $page;

        return Cache::remember($cacheKey, CACHE_TTL, function () use ($query, $page) {
            $posts = (new FetchPosts($query))->builder()->paginate(PAGE_SIZE, ['*'], 'page', $page);

            collect($posts->items())->map(function ($post) {
                $tagsArray = [];
                foreach ($post->tags as $key => $tag) {
                    $tagsArray[$key]['name'] = $tag->name;
                    $tagsArray[$key]['slug'] = $tag->slug;
                }

                unset($post->tags);
                $post->tags = $tagsArray;
            });

            return $posts;
        });
    }
}
