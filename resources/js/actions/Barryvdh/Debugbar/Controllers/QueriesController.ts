import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \Barryvdh\Debugbar\Controllers\QueriesController::explain
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/QueriesController.php:14
 * @route /_debugbar/queries/explain
 */
export const explain = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: explain.url(options),
    method: 'post',
})

explain.definition = {
    methods: ['post'],
    url: '\/_debugbar\/queries\/explain',
}

/**
 * @see \Barryvdh\Debugbar\Controllers\QueriesController::explain
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/QueriesController.php:14
 * @route /_debugbar/queries/explain
 */
explain.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return explain.definition.url + queryParams(options)
}

/**
 * @see \Barryvdh\Debugbar\Controllers\QueriesController::explain
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/QueriesController.php:14
 * @route /_debugbar/queries/explain
 */
explain.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: explain.url(options),
    method: 'post',
})

const QueriesController = { explain }

export default QueriesController