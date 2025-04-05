import { queryParams, type QueryParams } from './../../wayfinder'

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

export default update