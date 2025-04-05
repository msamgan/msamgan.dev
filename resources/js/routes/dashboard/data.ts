import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\DashboardController::data
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
export const data = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: data.url(options),
    method: 'get',
})

data.definition = {
    methods: ['get','head'],
    url: '\/dashboard-data',
}

/**
 * @see \App\Http\Controllers\DashboardController::data
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
data.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return data.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\DashboardController::data
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
data.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: data.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\DashboardController::data
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
data.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: data.url(options),
    method: 'head',
})

export default data