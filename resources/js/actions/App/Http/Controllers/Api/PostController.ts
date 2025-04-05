import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
 * @see \App\Http\Controllers\Api\PostController::tagList
 * @see app/Http/Controllers/Api/PostController.php:17
 * @route /api/tag/list
 */
export const tagList = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: tagList.url(options),
    method: 'get',
})

tagList.definition = {
    methods: ['get','head'],
    url: '\/api\/tag\/list',
}

/**
 * @see \App\Http\Controllers\Api\PostController::tagList
 * @see app/Http/Controllers/Api/PostController.php:17
 * @route /api/tag/list
 */
tagList.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return tagList.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::tagList
 * @see app/Http/Controllers/Api/PostController.php:17
 * @route /api/tag/list
 */
tagList.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: tagList.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::tagList
 * @see app/Http/Controllers/Api/PostController.php:17
 * @route /api/tag/list
 */
tagList.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: tagList.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postList
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
export const postList = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postList.url(options),
    method: 'get',
})

postList.definition = {
    methods: ['get','head'],
    url: '\/api\/post\/list',
}

/**
 * @see \App\Http\Controllers\Api\PostController::postList
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
postList.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return postList.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::postList
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
postList.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postList.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postList
 * @see app/Http/Controllers/Api/PostController.php:24
 * @route /api/post/list
 */
postList.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: postList.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postListPaginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
export const postListPaginated = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postListPaginated.url(options),
    method: 'get',
})

postListPaginated.definition = {
    methods: ['get','head'],
    url: '\/api\/post\/list\/paginated',
}

/**
 * @see \App\Http\Controllers\Api\PostController::postListPaginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
postListPaginated.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return postListPaginated.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::postListPaginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
postListPaginated.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postListPaginated.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postListPaginated
 * @see app/Http/Controllers/Api/PostController.php:29
 * @route /api/post/list/paginated
 */
postListPaginated.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: postListPaginated.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postShow
 * @see app/Http/Controllers/Api/PostController.php:34
 * @route /api/post/{slug}
 */
export const postShow = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postShow.url(args, options),
    method: 'get',
})

postShow.definition = {
    methods: ['get','head'],
    url: '\/api\/post\/{slug}',
}

/**
 * @see \App\Http\Controllers\Api\PostController::postShow
 * @see app/Http/Controllers/Api/PostController.php:34
 * @route /api/post/{slug}
 */
postShow.url = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    const parsedArgs = {
        slug: args.slug,
    }

    return postShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::postShow
 * @see app/Http/Controllers/Api/PostController.php:34
 * @route /api/post/{slug}
 */
postShow.get = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postShow.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postShow
 * @see app/Http/Controllers/Api/PostController.php:34
 * @route /api/post/{slug}
 */
postShow.head = (args: { slug: string | number } | [slug: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: postShow.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postTag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
export const postTag = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postTag.url(args, options),
    method: 'get',
})

postTag.definition = {
    methods: ['get','head'],
    url: '\/api\/post\/tag\/{tag}',
}

/**
 * @see \App\Http\Controllers\Api\PostController::postTag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
postTag.url = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return postTag.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Api\PostController::postTag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
postTag.get = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: postTag.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Api\PostController::postTag
 * @see app/Http/Controllers/Api/PostController.php:45
 * @route /api/post/tag/{tag}
 */
postTag.head = (args: { tag: string | number } | [tag: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: postTag.url(args, options),
    method: 'head',
})

const PostController = { tagList, postList, postListPaginated, postShow, postTag }

export default PostController