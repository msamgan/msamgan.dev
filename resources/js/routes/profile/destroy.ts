import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProfileController::destroy
 * @see app/Http/Controllers/ProfileController.php:46
 * @route /profile
 */
export const destroy = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/profile',
}

/**
 * @see \App\Http\Controllers\ProfileController::destroy
 * @see app/Http/Controllers/ProfileController.php:46
 * @route /profile
 */
destroy.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return destroy.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProfileController::destroy
 * @see app/Http/Controllers/ProfileController.php:46
 * @route /profile
 */
destroy.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(options),
    method: 'delete',
})

export default destroy