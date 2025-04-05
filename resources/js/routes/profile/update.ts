import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProfileController::update
 * @see app/Http/Controllers/ProfileController.php:30
 * @route /profile
 */
export const update = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ['patch'],
    url: '\/profile',
}

/**
 * @see \App\Http\Controllers\ProfileController::update
 * @see app/Http/Controllers/ProfileController.php:30
 * @route /profile
 */
update.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return update.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProfileController::update
 * @see app/Http/Controllers/ProfileController.php:30
 * @route /profile
 */
update.patch = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(options),
    method: 'patch',
})

export default update