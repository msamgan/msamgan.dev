import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\OrganizationController::show
 * @see app/Http/Controllers/OrganizationController.php:47
 * @route /service/organization/show/{organization}
 */
export const show = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/service\/organization\/show\/{organization}',
}

/**
 * @see \App\Http\Controllers\OrganizationController::show
 * @see app/Http/Controllers/OrganizationController.php:47
 * @route /service/organization/show/{organization}
 */
show.url = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { organization: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { organization: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            organization: args[0],
        }
    }

    const parsedArgs = {
        organization: typeof args.organization === 'object'
            ? args.organization.id
            : args.organization,
    }

    return show.definition.url
            .replace('{organization}', parsedArgs.organization.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\OrganizationController::show
 * @see app/Http/Controllers/OrganizationController.php:47
 * @route /service/organization/show/{organization}
 */
show.get = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\OrganizationController::show
 * @see app/Http/Controllers/OrganizationController.php:47
 * @route /service/organization/show/{organization}
 */
show.head = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show