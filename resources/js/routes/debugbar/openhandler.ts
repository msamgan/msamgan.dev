import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::openhandler
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
export const openhandler = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: openhandler.url(options),
    method: 'get',
})

openhandler.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/open',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::openhandler
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
openhandler.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return openhandler.definition.url + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::openhandler
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
openhandler.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: openhandler.url(options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\OpenHandlerController::openhandler
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:43
 * @route /_debugbar/open
 */
openhandler.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: openhandler.url(options),
    method: 'head',
})

export default openhandler