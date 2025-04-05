import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\Api\PostController::list
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
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
    url: '\/api\/post\/list',
}

/**
 * @see \App\Http\Controllers\Api\PostController::list
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
list.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return list.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::list
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
list.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::list
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
list.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: list.url(options),
    method: 'head',
})

export default list