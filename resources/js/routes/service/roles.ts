import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
export const roles = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: roles.url(options),
    method: 'get',
})

roles.definition = {
    methods: ['get','head'],
    url: '\/service\/roles',
}

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
roles.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return roles.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
roles.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: roles.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
roles.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: roles.url(options),
    method: 'head',
})

export default roles