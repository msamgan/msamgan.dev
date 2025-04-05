import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\TransactionController::transactions
 * @see app/Http/Controllers/TransactionController.php:43
 * @route /service/transactions
 */
export const transactions = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ['get','head'],
    url: '\/service\/transactions',
}

/**
 * @see \App\Http\Controllers\TransactionController::transactions
 * @see app/Http/Controllers/TransactionController.php:43
 * @route /service/transactions
 */
transactions.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return transactions.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TransactionController::transactions
 * @see app/Http/Controllers/TransactionController.php:43
 * @route /service/transactions
 */
transactions.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: transactions.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TransactionController::transactions
 * @see app/Http/Controllers/TransactionController.php:43
 * @route /service/transactions
 */
transactions.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: transactions.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\TransactionController::descriptions
 * @see app/Http/Controllers/TransactionController.php:75
 * @route /service/transaction/descriptions
 */
export const descriptions = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: descriptions.url(options),
    method: 'get',
})

descriptions.definition = {
    methods: ['get','head'],
    url: '\/service\/transaction\/descriptions',
}

/**
 * @see \App\Http\Controllers\TransactionController::descriptions
 * @see app/Http/Controllers/TransactionController.php:75
 * @route /service/transaction/descriptions
 */
descriptions.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return descriptions.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\TransactionController::descriptions
 * @see app/Http/Controllers/TransactionController.php:75
 * @route /service/transaction/descriptions
 */
descriptions.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: descriptions.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\TransactionController::descriptions
 * @see app/Http/Controllers/TransactionController.php:75
 * @route /service/transaction/descriptions
 */
descriptions.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: descriptions.url(options),
    method: 'head',
})

const TransactionController = { index, store, transactions, descriptions }

export default TransactionController