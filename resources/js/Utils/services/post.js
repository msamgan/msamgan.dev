export const post = {
    list: (filters = {}) => {
        return route('service.posts', { ...filters })
    },
    create: route('post.create'),
    edit: (id) =>
        route('post.edit', {
            post: id,
        }),
    last: route('service.post.last'),
    tag: {
        list: route('service.post.tag.list'),
    },
    show: (id) => route('service.post.show', id),
    destroy: (id) => route('service.post.destroy', id),
}
