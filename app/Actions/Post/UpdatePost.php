<?php

namespace App\Actions\Post;

use App\Http\EditorJs;
use App\Models\Post;
use App\Models\Tag;
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

        if ($data['status'] === 'published' && $post->published_at === null) {
            $data['published_at'] = now();
        } elseif ($data['status'] === 'draft') {
            $data['published_at'] = null;
        } else {
            $data['published_at'] = $post->published_at;
        }

        $post->update($data);

        if (! empty($data['tags'])) {
            $post->tags()->sync(Tag::tagNameToIdArray($data['tags']));
        } else {
            $post->tags()->sync([]);
        }

        return $post->refresh();
    }
}
