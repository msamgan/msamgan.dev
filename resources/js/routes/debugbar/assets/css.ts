import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::css
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:36
 * @route /_debugbar/assets/stylesheets
 */
export const css = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: css.url(options),
    method: 'get',
})

css.definition = {
    methods: ['get','head'],
    url: '\/_debugbar\/assets\/stylesheets',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::css
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:36
 * @route /_debugbar/assets/stylesheets
 */
css.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return css.definition.url + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::css
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:36
 * @route /_debugbar/assets/stylesheets
 */
css.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: css.url(options),
    method: 'get',
})

/**
 * @see \Barryvdh\Debugbar\Controllers\AssetController::css
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:36
 * @route /_debugbar/assets/stylesheets
 */
css.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: css.url(options),
    method: 'head',
})

export default css