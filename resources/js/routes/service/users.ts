import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
export const users = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: users.url(options),
    method: 'get',
})

users.definition = {
    methods: ['get','head'],
    url: '\/service\/users',
}

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
users.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return users.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
users.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: users.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
users.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: users.url(options),
    method: 'head',
})

export default users