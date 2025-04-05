import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\BusinessController::update
 * @see app/Http/Controllers/BusinessController.php:57
 * @route /business/update/{business}
 */
export const update = (args: { business: number | { id: number } } | [business: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/business\/update\/{business}',
}

/**
 * @see \App\Http\Controllers\BusinessController::update
 * @see app/Http/Controllers/BusinessController.php:57
 * @route /business/update/{business}
 */
update.url = (args: { business: number | { id: number } } | [business: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { business: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { business: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            business: args[0],
        }
    }

    const parsedArgs = {
        business: typeof args.business === 'object'
            ? args.business.id
            : args.business,
    }

    return update.definition.url
            .replace('{business}', parsedArgs.business.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\BusinessController::update
 * @see app/Http/Controllers/BusinessController.php:57
 * @route /business/update/{business}
 */
update.post = (args: { business: number | { id: number } } | [business: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

const BusinessController = { settings, update }

export default BusinessController