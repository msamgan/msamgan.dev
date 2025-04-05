import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\MediaController::index
 * @see app/Http/Controllers/MediaController.php:17
 * @route /media
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
    url: '\/media',
}

/**
 * @see \App\Http\Controllers\MediaController::index
 * @see app/Http/Controllers/MediaController.php:17
 * @route /media
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MediaController::index
 * @see app/Http/Controllers/MediaController.php:17
 * @route /media
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MediaController::index
 * @see app/Http/Controllers/MediaController.php:17
 * @route /media
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\MediaController::store
 * @see app/Http/Controllers/MediaController.php:25
 * @route /media/store
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/media\/store',
}

/**
 * @see \App\Http\Controllers\MediaController::store
 * @see app/Http/Controllers/MediaController.php:25
 * @route /media/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MediaController::store
 * @see app/Http/Controllers/MediaController.php:25
 * @route /media/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:49
 * @route /service/media
 */
export const media = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: media.url(options),
    method: 'get',
})

media.definition = {
    methods: ['get','head'],
    url: '\/service\/media',
}

/**
 * @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:49
 * @route /service/media
 */
media.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return media.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:49
 * @route /service/media
 */
media.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: media.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MediaController::media
 * @see app/Http/Controllers/MediaController.php:49
 * @route /service/media
 */
media.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: media.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:0
 * @route /service/media/destroy/{media}
 */
export const destroy = (args: { media: string | number } | [media: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/media\/destroy\/{media}',
}

/**
 * @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:0
 * @route /service/media/destroy/{media}
 */
destroy.url = (args: { media: string | number } | [media: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    const parsedArgs = {
        media: args.media,
    }

    return destroy.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:0
 * @route /service/media/destroy/{media}
 */
destroy.delete = (args: { media: string | number } | [media: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const MediaController = { index, store, media, destroy }

export default MediaController