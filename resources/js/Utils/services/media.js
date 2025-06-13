export const media = {
    list: route('service.media'),
    destroy: (id) =>
        route('service.media.destroy', {
            name: id,
        }),
}
