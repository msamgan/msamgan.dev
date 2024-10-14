<?php

namespace App\Actions\Post;

use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class FetchPost
{
    public function handle(string $slug): ?Post
    {
        $post = Cache::remember('post_' . $slug, CACHE_TTL, function () use ($slug) {
            return Post::query()
                ->where('slug', $slug)
                ->with('tags')
                ->first();
        });

        if (! $post) {
            return null;
        }

        $tagsArray = $this->tagArray(post: $post, slug: $slug);

        $post->related_posts = Cache::remember(
            'post_' . $slug . '_related_posts',
            CACHE_TTL,
            function () use ($post) {
                return $this->getRelatedPosts(postTags: $post->tags, currentPostSlug: $post->slug);
            }
        );

        unset($post->tags);
        unset($post->content_raw);

        $post->tags = $tagsArray;

        return $post;
    }

    private function tagArray(Post $post, string $slug): array
    {
        return Cache::remember('post_' . $slug . '_tags',
            CACHE_TTL,
            function () use ($post) {
                $tagsArray = [];
                foreach ($post->tags as $key => $tag) {
                    $tagsArray[$key]['name'] = $tag->name;
                    $tagsArray[$key]['slug'] = $tag->slug;
                }

                return $tagsArray;
            }
        );
    }

    private function getRelatedPosts(Collection $postTags, string $currentPostSlug): Collection
    {
        return Post::query()
            ->select('title', 'slug', 'excerpt', 'featured_image', 'published_at')
            ->whereHas('tags', function ($query) use ($postTags) {
                $query->whereIn('name', $postTags->pluck('name'));
            })
            ->where('status', 'published')
            ->where('slug', '!=', $currentPostSlug)
            ->orderBy('published_at', 'desc')
            ->limit(10)
            ->get();
    }
}
