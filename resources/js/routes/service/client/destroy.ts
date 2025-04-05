import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\ClientController::destroy
 * @see app/Http/Controllers/ClientController.php:69
 * @route /service/client/destroy/{client}
 */
export const destroy = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/client\/destroy\/{client}',
}

/**
 * @see \App\Http\Controllers\ClientController::destroy
 * @see app/Http/Controllers/ClientController.php:69
 * @route /service/client/destroy/{client}
 */
destroy.url = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ClientController::destroy
 * @see app/Http/Controllers/ClientController.php:69
 * @route /service/client/destroy/{client}
 */
destroy.delete = (args: { client: string | { id: string } } | [client: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy