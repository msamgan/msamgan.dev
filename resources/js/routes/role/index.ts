import store from './store'
import update from './update'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:24
 * @route /roles
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
    url: '\/roles',
}

/**
 * @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:24
 * @route /roles
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:24
 * @route /roles
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\RoleController::index
 * @see app/Http/Controllers/RoleController.php:24
 * @route /roles
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const role = {
    index, 
    store, 
    update,
}

export default role