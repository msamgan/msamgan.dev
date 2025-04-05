import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\PermissionController::permissions
 * @see app/Http/Controllers/PermissionController.php:13
 * @route /service/permissions
 */
export const permissions = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: permissions.url(options),
    method: 'get',
})

permissions.definition = {
    methods: ['get','head'],
    url: '\/service\/permissions',
}

/**
 * @see \App\Http\Controllers\PermissionController::permissions
 * @see app/Http/Controllers/PermissionController.php:13
 * @route /service/permissions
 */
permissions.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return permissions.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PermissionController::permissions
 * @see app/Http/Controllers/PermissionController.php:13
 * @route /service/permissions
 */
permissions.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: permissions.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PermissionController::permissions
 * @see app/Http/Controllers/PermissionController.php:13
 * @route /service/permissions
 */
permissions.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: permissions.url(options),
    method: 'head',
})

export default permissions