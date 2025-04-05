import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::projects
 * @see app/Http/Controllers/ProjectController.php:68
 * @route /service/projects
 */
export const projects = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: projects.url(options),
    method: 'get',
})

projects.definition = {
    methods: ['get','head'],
    url: '\/service\/projects',
}

/**
 * @see \App\Http\Controllers\ProjectController::projects
 * @see app/Http/Controllers/ProjectController.php:68
 * @route /service/projects
 */
projects.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return projects.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::projects
 * @see app/Http/Controllers/ProjectController.php:68
 * @route /service/projects
 */
projects.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: projects.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::projects
 * @see app/Http/Controllers/ProjectController.php:68
 * @route /service/projects
 */
projects.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: projects.url(options),
    method: 'head',
})

export default projects