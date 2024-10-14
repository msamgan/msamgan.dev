<?php

namespace App\Actions\Post;

use App\Http\EditorJs;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Str;

class CreatePost
{
    public function handle(array $data): Post
    {
        $parsedHtmlContent = (new EditorJs)->parse($data['content']);

        $data['content_raw'] = json_encode($data['content']);
        $data['content'] = removeNbsp($parsedHtmlContent);
        $data['slug'] = Str::slug($data['title']);
        $data['meta_description'] = $data['excerpt'];

        if ($data['status'] === 'published') {
            $data['published_at'] = now();
        }

        $post = Post::create($data);

        if (! empty($data['tags'])) {
            $post->tags()->sync(Tag::tagNameToIdArray($data['tags']));
        }

        return $post;
    }
}
