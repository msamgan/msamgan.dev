import { queryParams, type QueryParams } from './../../wayfinder'

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

export default organizations