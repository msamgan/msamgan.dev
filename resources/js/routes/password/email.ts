import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:30
 * @route /forgot-password
 */
export const email = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: email.url(options),
    method: 'post',
})

email.definition = {
    methods: ['post'],
    url: '\/forgot-password',
}

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:30
 * @route /forgot-password
 */
email.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return email.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\PasswordResetLinkController::email
 * @see app/Http/Controllers/Auth/PasswordResetLinkController.php:30
 * @route /forgot-password
 */
email.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: email.url(options),
    method: 'post',
})

export default email