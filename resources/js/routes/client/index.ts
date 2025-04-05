import store from './store'
import update from './update'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ClientController::index
 * @see app/Http/Controllers/ClientController.php:23
 * @route /clients
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
    url: '\/clients',
}

/**
 * @see \App\Http\Controllers\ClientController::index
 * @see app/Http/Controllers/ClientController.php:23
 * @route /clients
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ClientController::index
 * @see app/Http/Controllers/ClientController.php:23
 * @route /clients
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ClientController::index
 * @see app/Http/Controllers/ClientController.php:23
 * @route /clients
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const client = {
    index, 
    store, 
    update,
}

export default client