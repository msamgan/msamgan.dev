import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:23
 * @route /projects
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
    url: '\/projects',
}

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:23
 * @route /projects
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:23
 * @route /projects
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProjectController::index
 * @see app/Http/Controllers/ProjectController.php:23
 * @route /projects
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:31
 * @route /project/store
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
    url: '\/project\/store',
}

/**
 * @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:31
 * @route /project/store
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::store
 * @see app/Http/Controllers/ProjectController.php:31
 * @route /project/store
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

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

/**
 * @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:61
 * @route /service/project/destroy/{project}
 */
export const destroy = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/project\/destroy\/{project}',
}

/**
 * @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:61
 * @route /service/project/destroy/{project}
 */
destroy.url = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProjectController::destroy
 * @see app/Http/Controllers/ProjectController.php:61
 * @route /service/project/destroy/{project}
 */
destroy.delete = (args: { project: string | { id: string } } | [project: string | { id: string }] | string | { id: string }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const ProjectController = { index, store, update, projects, show, destroy }

export default ProjectController