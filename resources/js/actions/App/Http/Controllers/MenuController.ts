import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
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
    url: '\/service\/menu',
}

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MenuController::index
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const MenuController = { index }

export default MenuController