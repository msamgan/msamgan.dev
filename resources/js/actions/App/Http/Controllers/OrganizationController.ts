import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\OrganizationController::index
 * @see app/Http/Controllers/OrganizationController.php:23
 * @route /organizations
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
    url: '\/organizations',
}

/**
 * @see \App\Http\Controllers\OrganizationController::index
 * @see app/Http/Controllers/OrganizationController.php:23
 * @route /organizations
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\OrganizationController::index
 * @see app/Http/Controllers/OrganizationController.php:23
 * @route /organizations
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\OrganizationController::index
 * @see app/Http/Controllers/OrganizationController.php:23
 * @route /organizations
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\OrganizationController::store
 * @see app/Http/Controllers/OrganizationController.php:31
 * @route /organization/store
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
    url: '\/organization\/store',
}

/**
 * @see \App\Http\Controllers\OrganizationController::store
 * @see app/Http/Controllers/OrganizationController.php:31
 * @route /organization/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\OrganizationController::store
 * @see app/Http/Controllers/OrganizationController.php:31
 * @route /organization/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\OrganizationController::update
 * @see app/Http/Controllers/OrganizationController.php:52
 * @route /organization/update/{organization}
 */
export const update = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/organization\/update\/{organization}',
}

/**
 * @see \App\Http\Controllers\OrganizationController::update
 * @see app/Http/Controllers/OrganizationController.php:52
 * @route /organization/update/{organization}
 */
update.url = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{organization}', parsedArgs.organization.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\OrganizationController::update
 * @see app/Http/Controllers/OrganizationController.php:52
 * @route /organization/update/{organization}
 */
update.post = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

/**
 * @see \App\Http\Controllers\OrganizationController::organizations
 * @see app/Http/Controllers/OrganizationController.php:66
 * @route /service/organizations
 */
export const organizations = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: organizations.url(options),
    method: 'get',
})

organizations.definition = {
    methods: ['get','head'],
    url: '\/service\/organizations',
}

/**
 * @see \App\Http\Controllers\OrganizationController::organizations
 * @see app/Http/Controllers/OrganizationController.php:66
 * @route /service/organizations
 */
organizations.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return organizations.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\OrganizationController::organizations
 * @see app/Http/Controllers/OrganizationController.php:66
 * @route /service/organizations
 */
organizations.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: organizations.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\OrganizationController::organizations
 * @see app/Http/Controllers/OrganizationController.php:66
 * @route /service/organizations
 */
organizations.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: organizations.url(options),
    method: 'head',
})

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

/**
 * @see \App\Http\Controllers\OrganizationController::destroy
 * @see app/Http/Controllers/OrganizationController.php:59
 * @route /service/organization/destroy/{organization}
 */
export const destroy = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/organization\/destroy\/{organization}',
}

/**
 * @see \App\Http\Controllers\OrganizationController::destroy
 * @see app/Http/Controllers/OrganizationController.php:59
 * @route /service/organization/destroy/{organization}
 */
destroy.url = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{organization}', parsedArgs.organization.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\OrganizationController::destroy
 * @see app/Http/Controllers/OrganizationController.php:59
 * @route /service/organization/destroy/{organization}
 */
destroy.delete = (args: { organization: string | { id: string } } | [organization: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const OrganizationController = { index, store, update, organizations, show, destroy }

export default OrganizationController