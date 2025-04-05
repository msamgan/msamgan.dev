import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\ConfirmablePasswordController::confirm
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:19
 * @route /confirm-password
 */
export const confirm = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ['get','head'],
    url: '\/confirm-password',
}

/**
 * @see \App\Http\Controllers\Auth\ConfirmablePasswordController::confirm
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:19
 * @route /confirm-password
 */
confirm.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return confirm.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\ConfirmablePasswordController::confirm
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:19
 * @route /confirm-password
 */
confirm.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: confirm.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Auth\ConfirmablePasswordController::confirm
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:19
 * @route /confirm-password
 */
confirm.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: confirm.url(options),
    method: 'head',
})

export default confirm