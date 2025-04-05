import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\MenuController::menu
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
export const menu = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: menu.url(options),
    method: 'get',
})

menu.definition = {
    methods: ['get','head'],
    url: '\/service\/menu',
}

/**
 * @see \App\Http\Controllers\MenuController::menu
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
menu.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return menu.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MenuController::menu
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
menu.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: menu.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\MenuController::menu
 * @see app/Http/Controllers/MenuController.php:15
 * @route /service/menu
 */
menu.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: menu.url(options),
    method: 'head',
})

export default menu