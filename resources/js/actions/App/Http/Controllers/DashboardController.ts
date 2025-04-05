import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:14
 * @route /dashboard
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
    url: '\/dashboard',
}

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:14
 * @route /dashboard
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:14
 * @route /dashboard
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\DashboardController::index
 * @see app/Http/Controllers/DashboardController.php:14
 * @route /dashboard
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\DashboardController::dashboardData
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
export const dashboardData = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboardData.url(options),
    method: 'get',
})

dashboardData.definition = {
    methods: ['get','head'],
    url: '\/dashboard-data',
}

/**
 * @see \App\Http\Controllers\DashboardController::dashboardData
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
dashboardData.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return dashboardData.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\DashboardController::dashboardData
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
dashboardData.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboardData.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\DashboardController::dashboardData
 * @see app/Http/Controllers/DashboardController.php:19
 * @route /dashboard-data
 */
dashboardData.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: dashboardData.url(options),
    method: 'head',
})

const DashboardController = { index, dashboardData }

export default DashboardController