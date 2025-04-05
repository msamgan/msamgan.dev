import { queryParams, type QueryParams, validateParameters } from './../../../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\CacheController::deleteMethod
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:13
 * @route /_debugbar/cache/{key}/{tags?}
 */
export const deleteMethod = (args: { key: string | number, tags?: string | number } | [key: string | number, tags: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ['delete'],
    url: '\/_debugbar\/cache\/{key}\/{tags?}',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\CacheController::deleteMethod
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:13
 * @route /_debugbar/cache/{key}/{tags?}
 */
deleteMethod.url = (args: { key: string | number, tags?: string | number } | [key: string | number, tags: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            key: args[0],
            tags: args[1],
        }
    }

    validateParameters(args, [
        "tags",
   ])

    const parsedArgs = {
        key: args.key,
        tags: args.tags,
    }

    return deleteMethod.definition.url
            .replace('{key}', parsedArgs.key.toString())
            .replace('{tags?}', parsedArgs.tags?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\CacheController::deleteMethod
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:13
 * @route /_debugbar/cache/{key}/{tags?}
 */
deleteMethod.delete = (args: { key: string | number, tags?: string | number } | [key: string | number, tags: string | number], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const CacheController = { deleteMethod, delete: deleteMethod }

export default CacheController