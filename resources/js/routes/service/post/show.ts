import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:49
 * @route /service/post/show/{post}
 */
export const show = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/service\/post\/show\/{post}',
}

/**
 * @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:49
 * @route /service/post/show/{post}
 */
show.url = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { post: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: typeof args.post === 'object'
            ? args.post.id
            : args.post,
    }

    return show.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:49
 * @route /service/post/show/{post}
 */
show.get = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::show
 * @see app/Http/Controllers/PostController.php:49
 * @route /service/post/show/{post}
 */
show.head = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show