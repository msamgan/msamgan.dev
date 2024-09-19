<?php

namespace App\Http\Controllers;

use Illuminate\Support\Collection;
use Illuminate\Support\HigherOrderCollectionProxy;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    private array $excludedModules = ['business'];

    public function permissions(): Collection|HigherOrderCollectionProxy
    {
        $filteredPermissions = [];
        Permission::query()->get()->each(function ($permission) use (&$filteredPermissions) {
            [$module, $action] = explode('.', $permission->name);

            if (in_array($module, $this->excludedModules)) {
                return;
            }

            $filteredPermissions[] = [
                'module' => $module,
                'name' => $action,
                'id' => $permission->id,
            ];
        });

        return collect($filteredPermissions)->groupBy('module');
    }
}
