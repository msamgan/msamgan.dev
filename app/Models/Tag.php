<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Str;

class Tag extends Model
{
    use HasFactory, HasUuids;

    protected $keyType = 'string';

    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'slug',
    ];

    public static function tagNameToIdArray($tags): array
    {
        $tagIds = [];
        foreach ($tags as $tag) {
            $tagIds[] = \App\Models\Tag::query()->firstOrCreate([
                'name' => strtolower((string) $tag),
                'slug' => Str::slug(strtolower((string) $tag)),
            ])->id;
        }

        return $tagIds;
    }

    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_tag', 'tag_id', 'post_id')
            ->where('status', 'published')
            ->orderBy('published_at', 'desc');
    }
}
