<?php

namespace App\Actions\Post;

use App\Models\Post;

class CreatePost
{
    public function handle(array $data): Post
    {
        return Post::create($data);
    }
}
