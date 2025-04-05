import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationPromptController::notice
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route /verify-email
 */
export const notice = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: notice.url(options),
    method: 'get',
})

notice.definition = {
    methods: ['get','head'],
    url: '\/verify-email',
}

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationPromptController::notice
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route /verify-email
 */
notice.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return notice.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationPromptController::notice
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route /verify-email
 */
notice.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: notice.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Auth\EmailVerificationPromptController::notice
 * @see app/Http/Controllers/Auth/EmailVerificationPromptController.php:16
 * @route /verify-email
 */
notice.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: notice.url(options),
    method: 'head',
})

export default notice