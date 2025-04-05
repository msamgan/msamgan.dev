import store from './store'
import update from './update'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:24
 * @route /users
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
    url: '\/users',
}

/**
 * @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:24
 * @route /users
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:24
 * @route /users
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\UserController::index
 * @see app/Http/Controllers/UserController.php:24
 * @route /users
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const user = {
    index, 
    store, 
    update,
}

export default user