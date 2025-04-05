import { queryParams, type QueryParams } from './../../../wayfinder'

/**
 * @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:0
 * @route /service/media/destroy/{media}
 */
export const destroy = (args: { media: string | number } | [media: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/service\/media\/destroy\/{media}',
}

/**
 * @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:0
 * @route /service/media/destroy/{media}
 */
destroy.url = (args: { media: string | number } | [media: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { media: args }
    }

    if (Array.isArray(args)) {
        args = {
            media: args[0],
        }
    }

    const parsedArgs = {
        media: args.media,
    }

    return destroy.definition.url
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\MediaController::destroy
 * @see app/Http/Controllers/MediaController.php:0
 * @route /service/media/destroy/{media}
 */
destroy.delete = (args: { media: string | number } | [media: string | number] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy