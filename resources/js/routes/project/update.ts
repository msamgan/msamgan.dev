import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:54
 * @route /project/update/{project}
 */
export const update = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ['post'],
    url: '\/project\/update\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:54
 * @route /project/update/{project}
 */
update.url = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::update
 * @see app/Http/Controllers/ProjectController.php:54
 * @route /project/update/{project}
 */
update.post = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: update.url(args, options),
    method: 'post',
})

export default update