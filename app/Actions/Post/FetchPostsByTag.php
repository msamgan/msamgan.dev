<?php

namespace App\Actions\Post;

use App\Models\Tag;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class FetchPostsByTag
{
    public function handle(string $tag, ?string $query = null): Collection
    {
        $posts = Tag::query()->where('slug', $tag)->with('posts', 'posts.tags')->first();

        if (! $posts) {
            return collect([]);
        }

        if ($query) {
            $posts->posts = $posts->posts->filter(fn ($post): bool => Str::contains($post->title, $query) || Str::contains($post->excerpt, $query));

            $posts->posts = $posts->posts->values();
        }

        $posts->posts->map(function ($post): void {
            unset($post->content_raw);
            unset($post->content);
            $tagsArray = [];

            foreach ($post->tags as $key => $tag) {
                $tagsArray[$key]['name'] = $tag->name;
                $tagsArray[$key]['slug'] = $tag->slug;
            }

            unset($post->tags);
            unset($post->pivot);

            $post->tags = $tagsArray;
        });

        return $posts->posts;
    }
}
