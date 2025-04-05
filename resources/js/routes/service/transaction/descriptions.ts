import { queryParams, type QueryParams } from './../../../wayfinder'

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

export default descriptions