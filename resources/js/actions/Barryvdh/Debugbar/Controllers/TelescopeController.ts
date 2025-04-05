import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::show
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
export const show = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/telescope\/{id}',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::show
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
show.url = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::show
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
show.get = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::show
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
show.head = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

const TelescopeController = { show }

export default TelescopeController