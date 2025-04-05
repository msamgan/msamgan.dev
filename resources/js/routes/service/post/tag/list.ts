import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::list
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
export const list = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ['get','head'],
    url: '\/service\/post\/tag\/list',
}

/**
 * @see \App\Http\Controllers\PostController::list
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
list.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return list.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::list
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
list.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::list
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
list.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: list.url(options),
    method: 'head',
})

export default list