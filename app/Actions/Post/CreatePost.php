<?php

namespace App\Actions\Post;

use App\Http\EditorJs;
use App\Models\Post;
use Illuminate\Support\Str;

class CreatePost
{
    public function handle(array $data): Post
    {
        $parsedHtmlContent = (new EditorJs)->parse($data['content']);

        $data['content_raw'] = json_encode($data['content']);
        $data['content'] = removeNbsp($parsedHtmlContent);
        $data['slug'] = Str::slug($data['title']);

        return Post::create($data);
    }
}
