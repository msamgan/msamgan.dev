import store from './store'
import update from './update'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:25
 * @route /posts
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
    url: '\/posts',
}

/**
 * @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:25
 * @route /posts
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:25
 * @route /posts
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::index
 * @see app/Http/Controllers/PostController.php:25
 * @route /posts
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const post = {
    index, 
    store, 
    update,
}

export default post