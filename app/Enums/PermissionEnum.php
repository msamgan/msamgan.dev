<?php

namespace App\Enums;

enum PermissionEnum: string
{
    case ClientList = 'client.list';
    case ClientCreate = 'client.create';
    case ClientUpdate = 'client.update';
    case ClientDelete = 'client.delete';

    case OrganizationList = 'organization.list';
    case OrganizationCreate = 'organization.create';
    case OrganizationUpdate = 'organization.update';
    case OrganizationDelete = 'organization.delete';

    case BusinessList = 'business.list';
    case BusinessCreate = 'business.create';
    case BusinessUpdate = 'business.update';
    case BusinessDelete = 'business.delete';

    case RoleList = 'role.list';
    case RoleCreate = 'role.create';
    case RoleUpdate = 'role.update';
    case RoleDelete = 'role.delete';

    case UserList = 'user.list';
    case UserCreate = 'user.create';
    case UserUpdate = 'user.update';
    case UserDelete = 'user.delete';

    public function can(): string
    {
        return match ($this) {
            self::BusinessList => 'can:business.list',
            self::BusinessCreate => 'can:business.create',
            self::BusinessUpdate => 'can:business.update',
            self::BusinessDelete => 'can:business.delete',

            self::RoleList => 'can:role.list',
            self::RoleCreate => 'can:role.create',
            self::RoleUpdate => 'can:role.update',
            self::RoleDelete => 'can:role.delete',

            self::UserList => 'can:user.list',
            self::UserCreate => 'can:user.create',
            self::UserUpdate => 'can:user.update',
            self::UserDelete => 'can:user.delete',

            self::OrganizationList => 'can:organization.list',
            self::OrganizationCreate => 'can:organization.create',
            self::OrganizationUpdate => 'can:organization.update',
            self::OrganizationDelete => 'can:organization.delete',

            self::ClientList => 'can:client.list',
            self::ClientCreate => 'can:client.create',
            self::ClientUpdate => 'can:client.update',
            self::ClientDelete => 'can:client.delete',
        };
    }
}
