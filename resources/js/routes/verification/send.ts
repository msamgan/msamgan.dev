import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route /email/verification-notification
 */
export const send = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ['post'],
    url: '\/email\/verification-notification',
}

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route /email/verification-notification
 */
send.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return send.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::send
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route /email/verification-notification
 */
send.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: send.url(options),
    method: 'post',
})

export default send