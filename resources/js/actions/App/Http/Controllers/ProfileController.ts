import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
export const edit = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/profile',
}

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
edit.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return edit.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
edit.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\ProfileController::edit
 * @see app/Http/Controllers/ProfileController.php:19
 * @route /profile
 */
edit.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(options),
    method: 'head',
})

/**
 * @see \App\Http\Controllers\ProfileController::update
 * @see app/Http/Controllers/ProfileController.php:30
 * @route /profile
 */
export const update = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ['patch'],
    url: '\/profile',
}

/**
 * @see \App\Http\Controllers\ProfileController::update
 * @see app/Http/Controllers/ProfileController.php:30
 * @route /profile
 */
update.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return update.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProfileController::update
 * @see app/Http/Controllers/ProfileController.php:30
 * @route /profile
 */
update.patch = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(options),
    method: 'patch',
})

/**
 * @see \App\Http\Controllers\ProfileController::destroy
 * @see app/Http/Controllers/ProfileController.php:46
 * @route /profile
 */
export const destroy = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/profile',
}

/**
 * @see \App\Http\Controllers\ProfileController::destroy
 * @see app/Http/Controllers/ProfileController.php:46
 * @route /profile
 */
destroy.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return destroy.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\ProfileController::destroy
 * @see app/Http/Controllers/ProfileController.php:46
 * @route /profile
 */
destroy.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(options),
    method: 'delete',
})

const ProfileController = { edit, update, destroy }

export default ProfileController