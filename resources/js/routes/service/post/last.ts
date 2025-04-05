import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
export const last = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: last.url(options),
    method: 'get',
})

last.definition = {
    methods: ['get','head'],
    url: '\/service\/post\/last',
}

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
last.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return last.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
last.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: last.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
last.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: last.url(options),
    method: 'head',
})

export default last