import store from './store'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\TransactionController::index
 * @see app/Http/Controllers/TransactionController.php:19
 * @route /transactions
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/transactions',
}

/**
 * @see \App\Http\Controllers\TransactionController::index
 * @see app/Http/Controllers/TransactionController.php:19
 * @route /transactions
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TransactionController::index
 * @see app/Http/Controllers/TransactionController.php:19
 * @route /transactions
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TransactionController::index
 * @see app/Http/Controllers/TransactionController.php:19
 * @route /transactions
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const transaction = {
    index, 
    store,
}

export default transaction