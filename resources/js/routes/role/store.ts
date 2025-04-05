import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:32
 * @route /role/store
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
    url: '\/role\/store',
}

/**
 * @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:32
 * @route /role/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:32
 * @route /role/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

export default store