import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:32
 * @route /user/store
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
    url: '\/user\/store',
}

/**
 * @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:32
 * @route /user/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::store
 * @see app/Http/Controllers/UserController.php:32
 * @route /user/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:64
 * @route /user/update/{user}
 */
export const update = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/user\/update\/{user}',
}

/**
 * @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:64
 * @route /user/update/{user}
 */
update.url = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    const parsedArgs = {
        user: typeof args.user === 'object'
            ? args.user.id
            : args.user,
    }

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::update
 * @see app/Http/Controllers/UserController.php:64
 * @route /user/update/{user}
 */
update.post = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
export const users = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: users.url(options),
    method: 'get',
})

users.definition = {
    methods: ['get','head'],
    url: '\/service\/users',
}

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
users.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return users.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
users.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: users.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\UserController::users
 * @see app/Http/Controllers/UserController.php:84
 * @route /service/users
 */
users.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: users.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\UserController::show
 * @see app/Http/Controllers/UserController.php:57
 * @route /service/user/show/{user}
 */
export const show = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/service\/user\/show\/{user}',
}

/**
 * @see \App\Http\Controllers\UserController::show
 * @see app/Http/Controllers/UserController.php:57
 * @route /service/user/show/{user}
 */
show.url = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    const parsedArgs = {
        user: typeof args.user === 'object'
            ? args.user.id
            : args.user,
    }

    return show.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::show
 * @see app/Http/Controllers/UserController.php:57
 * @route /service/user/show/{user}
 */
show.get = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\UserController::show
 * @see app/Http/Controllers/UserController.php:57
 * @route /service/user/show/{user}
 */
show.head = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\UserController::destroy
 * @see app/Http/Controllers/UserController.php:77
 * @route /service/user/destroy/{user}
 */
export const destroy = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/user\/destroy\/{user}',
}

/**
 * @see \App\Http\Controllers\UserController::destroy
 * @see app/Http/Controllers/UserController.php:77
 * @route /service/user/destroy/{user}
 */
destroy.url = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    const parsedArgs = {
        user: typeof args.user === 'object'
            ? args.user.id
            : args.user,
    }

    return destroy.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\UserController::destroy
 * @see app/Http/Controllers/UserController.php:77
 * @route /service/user/destroy/{user}
 */
destroy.delete = (args: { user: number | { id: number } } | [user: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const UserController = { index, store, update, users, show, destroy }

export default UserController