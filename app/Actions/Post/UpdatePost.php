<?php

namespace App\Actions\Post;

use App\Models\Post;

class UpdatePost
{
    public function handle(Post $post, array $data): Post
    {
        $post->update($data);

        return $post;
    }
}
