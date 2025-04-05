import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ClientController::clients
 * @see app/Http/Controllers/ClientController.php:86
 * @route /service/clients
 */
export const clients = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: clients.url(options),
    method: 'get',
})

clients.definition = {
    methods: ['get','head'],
    url: '\/service\/clients',
}

/**
 * @see \App\Http\Controllers\ClientController::clients
 * @see app/Http/Controllers/ClientController.php:86
 * @route /service/clients
 */
clients.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return clients.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ClientController::clients
 * @see app/Http/Controllers/ClientController.php:86
 * @route /service/clients
 */
clients.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: clients.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ClientController::clients
 * @see app/Http/Controllers/ClientController.php:86
 * @route /service/clients
 */
clients.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: clients.url(options),
    method: 'head',
})

export default clients