import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ClientController::update
 * @see app/Http/Controllers/ClientController.php:54
 * @route /client/update/{client}
 */
export const update = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/client\/update\/{client}',
}

/**
 * @see \App\Http\Controllers\ClientController::update
 * @see app/Http/Controllers/ClientController.php:54
 * @route /client/update/{client}
 */
update.url = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ClientController::update
 * @see app/Http/Controllers/ClientController.php:54
 * @route /client/update/{client}
 */
update.post = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

export default update