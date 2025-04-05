import { queryParams, type QueryParams } from './../../../../wayfinder'

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

/**
 * @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:32
 * @route /role/store
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
    url: '\/role\/store',
}

/**
 * @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:32
 * @route /role/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::store
 * @see app/Http/Controllers/RoleController.php:32
 * @route /role/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:58
 * @route /role/update/{role}
 */
export const update = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/role\/update\/{role}',
}

/**
 * @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:58
 * @route /role/update/{role}
 */
update.url = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { role: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    const parsedArgs = {
        role: typeof args.role === 'object'
            ? args.role.id
            : args.role,
    }

    return update.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::update
 * @see app/Http/Controllers/RoleController.php:58
 * @route /role/update/{role}
 */
update.post = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
export const roles = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: roles.url(options),
    method: 'get',
})

roles.definition = {
    methods: ['get','head'],
    url: '\/service\/roles',
}

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
roles.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return roles.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
roles.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: roles.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\RoleController::roles
 * @see app/Http/Controllers/RoleController.php:81
 * @route /service/roles
 */
roles.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: roles.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:48
 * @route /service/role/show/{role}
 */
export const show = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/service\/role\/show\/{role}',
}

/**
 * @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:48
 * @route /service/role/show/{role}
 */
show.url = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { role: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    const parsedArgs = {
        role: typeof args.role === 'object'
            ? args.role.id
            : args.role,
    }

    return show.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:48
 * @route /service/role/show/{role}
 */
show.get = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\RoleController::show
 * @see app/Http/Controllers/RoleController.php:48
 * @route /service/role/show/{role}
 */
show.head = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:74
 * @route /service/role/destroy/{role}
 */
export const destroy = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/role\/destroy\/{role}',
}

/**
 * @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:74
 * @route /service/role/destroy/{role}
 */
destroy.url = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { role: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    const parsedArgs = {
        role: typeof args.role === 'object'
            ? args.role.id
            : args.role,
    }

    return destroy.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\RoleController::destroy
 * @see app/Http/Controllers/RoleController.php:74
 * @route /service/role/destroy/{role}
 */
destroy.delete = (args: { role: number | { id: number } } | [role: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const RoleController = { index, store, update, roles, show, destroy }

export default RoleController