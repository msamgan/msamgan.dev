import { queryParams, type QueryParams } from './../../wayfinder'

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

export default transactions