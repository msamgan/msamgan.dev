<?php

namespace App\Actions\Post;

use App\Http\EditorJs;
use App\Models\Post;
use Illuminate\Support\Str;

class UpdatePost
{
    public function handle(Post $post, array $data): Post
    {
        $parsedHtmlContent = (new EditorJs)->parse($data['content']);

        $data['content_raw'] = json_encode($data['content']);
        $data['content'] = removeNbsp($parsedHtmlContent);
        $data['slug'] = Str::slug($data['slug']);
        $data['meta_description'] = $data['excerpt'];

        $post->update($data);

        return $post->refresh();
    }
}
