import store from './store'
import { queryParams, type QueryParams } from './../../wayfinder'

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

const media = {
    index, 
    store,
}

export default media