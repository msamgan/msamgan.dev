
import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:10
 * @route /notifications
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
    url: '\/notifications',
}

/**
 * @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:10
 * @route /notifications
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:10
 * @route /notifications
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:10
 * @route /notifications
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const notification = {
    index,
}

export default notification