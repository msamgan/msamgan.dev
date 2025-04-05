import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\ClientController::store
 * @see app/Http/Controllers/ClientController.php:31
 * @route /client/store
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
    url: '\/client\/store',
}

/**
 * @see \App\Http\Controllers\ClientController::store
 * @see app/Http/Controllers/ClientController.php:31
 * @route /client/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ClientController::store
 * @see app/Http/Controllers/ClientController.php:31
 * @route /client/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

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

const ClientController = { index, store, update, clients, show, destroy }

export default ClientController