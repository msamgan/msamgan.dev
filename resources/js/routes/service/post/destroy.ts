import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:64
 * @route /service/post/destroy/{post}
 */
export const destroy = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/post\/destroy\/{post}',
}

/**
 * @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:64
 * @route /service/post/destroy/{post}
 */
destroy.url = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::destroy
 * @see app/Http/Controllers/PostController.php:64
 * @route /service/post/destroy/{post}
 */
destroy.delete = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy