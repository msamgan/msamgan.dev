import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:31
 * @route /project/store
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/project\/store',
}

/**
 * @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:31
 * @route /project/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:31
 * @route /project/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

export default store