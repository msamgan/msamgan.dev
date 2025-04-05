import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::telescope
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
export const telescope = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: telescope.url(args, options),
    method: 'get',
})

telescope.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/telescope\/{id}',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::telescope
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
telescope.url = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return telescope.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::telescope
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
telescope.get = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: telescope.url(args, options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\TelescopeController::telescope
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/TelescopeController.php:15
 * @route /_debugbar/telescope/{id}
 */
telescope.head = (args: { id: string | number } | [id: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: telescope.url(args, options),
    method: 'head',
})

export default telescope