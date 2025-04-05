import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\Api\PostController::paginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
export const paginated = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: paginated.url(options),
    method: 'get',
})

paginated.definition = {
    methods: ['get','head'],
    url: '\/api\/post\/list\/paginated',
}

/**
 * @see \App\Http\Controllers\Api\PostController::paginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
paginated.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return paginated.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::paginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
paginated.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: paginated.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::paginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
paginated.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: paginated.url(options),
    method: 'head',
})

export default paginated