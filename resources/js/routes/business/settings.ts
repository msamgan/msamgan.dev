import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\BusinessController::settings
 * @see app/Http/Controllers/BusinessController.php:70
 * @route /business/settings
 */
export const settings = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ['get','head'],
    url: '\/business\/settings',
}

/**
 * @see \App\Http\Controllers\BusinessController::settings
 * @see app/Http/Controllers/BusinessController.php:70
 * @route /business/settings
 */
settings.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return settings.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BusinessController::settings
 * @see app/Http/Controllers/BusinessController.php:70
 * @route /business/settings
 */
settings.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: settings.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\BusinessController::settings
 * @see app/Http/Controllers/BusinessController.php:70
 * @route /business/settings
 */
settings.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: settings.url(options),
    method: 'head',
})

export default settings