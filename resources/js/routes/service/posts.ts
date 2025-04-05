import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
export const posts = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: posts.url(options),
    method: 'get',
})

posts.definition = {
    methods: ['get','head'],
    url: '\/service\/posts',
}

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
posts.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return posts.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
posts.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: posts.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
posts.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: posts.url(options),
    method: 'head',
})

export default posts