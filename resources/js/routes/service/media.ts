import { queryParams, type QueryParams } from './../../wayfinder'

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

export default media