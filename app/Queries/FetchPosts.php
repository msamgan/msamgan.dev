<?php

namespace App\Queries;

use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;

readonly class FetchPosts
{
    public function __construct(
        private ?string $query = null,
    ) {}

    public function builder(): Builder
    {
        return Post::query()
            ->select('id', 'title', 'slug', 'excerpt', 'status', 'featured_image', 'published_at')
            ->where('status', 'published')
            ->with('tags')
            ->orderBy('published_at', 'desc')
            ->when($this->query, function ($query) {
                $query->where('title', 'like', '%' . request('query') . '%');
                $query->orWhere('excerpt', 'like', '%' . request('query') . '%');
            });
    }
}
