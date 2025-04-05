import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::handle
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
export const handle = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: handle.url(options),
    method: 'get',
})

handle.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/open',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::handle
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
handle.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return handle.definition.url + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::handle
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
handle.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: handle.url(options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::handle
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
handle.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: handle.url(options),
    method: 'head',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::clockwork
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:77
 * @route /_debugbar/clockwork/{id}
 */
export const clockwork = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: clockwork.url(args, options),
    method: 'get',
})

clockwork.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/clockwork\/{id}',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::clockwork
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:77
 * @route /_debugbar/clockwork/{id}
 */
clockwork.url = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    const parsedArgs = {
        id: args.id,
    }

    return clockwork.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::clockwork
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:77
 * @route /_debugbar/clockwork/{id}
 */
clockwork.get = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: clockwork.url(args, options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::clockwork
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:77
 * @route /_debugbar/clockwork/{id}
 */
clockwork.head = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: clockwork.url(args, options),
    method: 'head',
})

const OpenHandlerController = { handle, clockwork }

export default OpenHandlerController