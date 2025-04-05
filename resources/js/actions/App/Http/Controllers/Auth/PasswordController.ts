import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\PasswordController::update
 * @see app/Http/Controllers/Auth/PasswordController.php:16
 * @route /password
 */
export const update = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ['put'],
    url: '\/password',
}

/**
 * @see \App\Http\Controllers\Auth\PasswordController::update
 * @see app/Http/Controllers/Auth/PasswordController.php:16
 * @route /password
 */
update.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return update.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\PasswordController::update
 * @see app/Http/Controllers/Auth/PasswordController.php:16
 * @route /password
 */
update.put = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(options),
    method: 'put',
})

const PasswordController = { update }

export default PasswordController