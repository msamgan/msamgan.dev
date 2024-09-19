<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @method static create(array $array)
 */
class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'label',
        'route',
        'icon',
        'permission',
        'order',
        'is_active',
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }
}
