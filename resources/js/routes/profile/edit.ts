import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
export const edit = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/profile',
}

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
edit.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return edit.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
edit.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
edit.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(options),
    method: 'head',
})

export default edit