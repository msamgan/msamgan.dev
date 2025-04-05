import { queryParams, type QueryParams } from './../../../wayfinder'

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

export default destroy