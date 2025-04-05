<?php

namespace App\Actions\Post;

use App\Queries\FetchPosts;
use Illuminate\Support\Facades\Cache;

class FetchNonPaginatedPosts
{
    public function handle(?string $query = null)
    {
        $cacheKey = $query ? 'posts_' . $query : 'posts';

        return Cache::remember($cacheKey, CACHE_TTL, function () use ($query) {
            $posts = (new FetchPosts($query))->builder()->get();

            $posts->map(function ($post): void {
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
