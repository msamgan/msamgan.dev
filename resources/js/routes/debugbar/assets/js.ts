import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::js
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:14
 * @route /_debugbar/assets/javascript
 */
export const js = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: js.url(options),
    method: 'get',
})

js.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/assets\/javascript',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::js
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:14
 * @route /_debugbar/assets/javascript
 */
js.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return js.definition.url + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::js
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:14
 * @route /_debugbar/assets/javascript
 */
js.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: js.url(options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::js
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:14
 * @route /_debugbar/assets/javascript
 */
js.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: js.url(options),
    method: 'head',
})

export default js