import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:18
 * @route /forgot-password
 */
export const request = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: request.url(options),
    method: 'get',
})

request.definition = {
    methods: ['get','head'],
    url: '\/forgot-password',
}

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:18
 * @route /forgot-password
 */
request.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return request.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:18
 * @route /forgot-password
 */
request.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: request.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::request
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:18
 * @route /forgot-password
 */
request.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: request.url(options),
    method: 'head',
})

export default request