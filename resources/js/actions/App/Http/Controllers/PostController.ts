import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:33
 * @route /post/store
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/post\/store',
}

/**
 * @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:33
 * @route /post/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:33
 * @route /post/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:57
 * @route /post/update/{post}
 */
export const update = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/post\/update\/{post}',
}

/**
 * @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:57
 * @route /post/update/{post}
 */
update.url = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::update
 * @see app/Http/Controllers/PostController.php:57
 * @route /post/update/{post}
 */
update.post = (args: { post: string | { id: string } } | [post: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
export const posts = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: posts.url(options),
    method: 'get',
})

posts.definition = {
    methods: ['get','head'],
    url: '\/service\/posts',
}

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
posts.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return posts.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
posts.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: posts.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::posts
 * @see app/Http/Controllers/PostController.php:71
 * @route /service/posts
 */
posts.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: posts.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
export const last = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: last.url(options),
    method: 'get',
})

last.definition = {
    methods: ['get','head'],
    url: '\/service\/post\/last',
}

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
last.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return last.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
last.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: last.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::last
 * @see app/Http/Controllers/PostController.php:79
 * @route /service/post/last
 */
last.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: last.url(options),
    method: 'head',
})

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

/**
 * @see \App\Http\Controllers\PostController::tagList
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
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
    url: '\/service\/post\/tag\/list',
}

/**
 * @see \App\Http\Controllers\PostController::tagList
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
tagList.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return tagList.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::tagList
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
tagList.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: tagList.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PostController::tagList
 * @see app/Http/Controllers/PostController.php:91
 * @route /service/post/tag/list
 */
tagList.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: tagList.url(options),
    method: 'head',
})

const PostController = { index, store, update, posts, last, show, destroy, tagList }

export default PostController