import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see routes/web.php:7
 * @route /
 */
export const welcome = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: welcome.url(options),
    method: 'get',
})

welcome.definition = {
    methods: ['get','head'],
    url: '\/',
}

/**
 * @see routes/web.php:7
 * @route /
 */
welcome.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return welcome.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:7
 * @route /
 */
welcome.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: welcome.url(options),
    method: 'get',
})

/**
 * @see routes/web.php:7
 * @route /
 */
welcome.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: welcome.url(options),
    method: 'head',
})

export default welcome