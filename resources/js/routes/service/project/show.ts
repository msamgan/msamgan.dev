import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:47
 * @route /service/project/show/{project}
 */
export const show = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/service\/project\/show\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:47
 * @route /service/project/show/{project}
 */
show.url = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { project: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            project: args[0],
        }
    }

    const parsedArgs = {
        project: typeof args.project === 'object'
            ? args.project.id
            : args.project,
    }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:47
 * @route /service/project/show/{project}
 */
show.get = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::show
 * @see app/Http/Controllers/ProjectController.php:47
 * @route /service/project/show/{project}
 */
show.head = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show