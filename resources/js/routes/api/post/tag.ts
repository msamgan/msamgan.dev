import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\Api\PostController::tag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
export const tag = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: tag.url(args, options),
    method: 'get',
})

tag.definition = {
    methods: ['get','head'],
    url: '\/api\/post\/tag\/{tag}',
}

/**
 * @see \App\Http\Controllers\Api\PostController::tag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
tag.url = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    const parsedArgs = {
        tag: args.tag,
    }

    return tag.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::tag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
tag.get = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: tag.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::tag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
tag.head = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: tag.url(args, options),
    method: 'head',
})

export default tag