<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * @method static find(mixed $get)
 */
class Role extends \Spatie\Permission\Models\Role
{
    use HasFactory;
    use LogsActivity;

    protected $fillable = ['name', 'display_name', 'guard_name', 'business_id', 'created_by'];

    protected $hidden = [
        'guard_name',
        'created_at',
        'updated_at',
        'created_by',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->logFillable();
    }
}
