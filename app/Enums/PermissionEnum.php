<?php

namespace App\Enums;

enum PermissionEnum: string
{
    case MediaList = 'media.list';
    case MediaCreate = 'media.create';
    case MediaUpdate = 'media.update';
    case MediaDelete = 'media.delete';

    case TransactionList = 'transaction.list';
    case TransactionCreate = 'transaction.create';
    case TransactionUpdate = 'transaction.update';
    case TransactionDelete = 'transaction.delete';

    case PostList = 'post.list';
    case PostCreate = 'post.create';
    case PostUpdate = 'post.update';
    case PostDelete = 'post.delete';

    case ProjectList = 'project.list';
    case ProjectCreate = 'project.create';
    case ProjectUpdate = 'project.update';
    case ProjectDelete = 'project.delete';

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

            self::ProjectList => 'can:project.list',
            self::ProjectCreate => 'can:project.create',
            self::ProjectUpdate => 'can:project.update',
            self::ProjectDelete => 'can:project.delete',

            self::PostList => 'can:post.list',
            self::PostCreate => 'can:post.create',
            self::PostUpdate => 'can:post.update',
            self::PostDelete => 'can:post.delete',

            self::TransactionList => 'can:transaction.list',
            self::TransactionCreate => 'can:transaction.create',
            self::TransactionUpdate => 'can:transaction.update',
            self::TransactionDelete => 'can:transaction.delete',

            self::MediaList => 'can:media.list',
            self::MediaCreate => 'can:media.create',
            self::MediaUpdate => 'can:media.update',
            self::MediaDelete => 'can:media.delete',
        };
    }
}
