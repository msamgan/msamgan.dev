import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TransactionController::store
 * @see app/Http/Controllers/TransactionController.php:27
 * @route /transaction/store
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
    url: '\/transaction\/store',
}

/**
 * @see \App\Http\Controllers\TransactionController::store
 * @see app/Http/Controllers/TransactionController.php:27
 * @route /transaction/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TransactionController::store
 * @see app/Http/Controllers/TransactionController.php:27
 * @route /transaction/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

export default store