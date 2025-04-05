import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\ClientController::show
 * @see app/Http/Controllers/ClientController.php:47
 * @route /service/client/show/{client}
 */
export const show = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/service\/client\/show\/{client}',
}

/**
 * @see \App\Http\Controllers\ClientController::show
 * @see app/Http/Controllers/ClientController.php:47
 * @route /service/client/show/{client}
 */
show.url = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    const parsedArgs = {
        client: typeof args.client === 'object'
            ? args.client.id
            : args.client,
    }

    return show.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ClientController::show
 * @see app/Http/Controllers/ClientController.php:47
 * @route /service/client/show/{client}
 */
show.get = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ClientController::show
 * @see app/Http/Controllers/ClientController.php:47
 * @route /service/client/show/{client}
 */
show.head = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show