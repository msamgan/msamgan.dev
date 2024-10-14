export const post = {
    list: route('service.posts'),
    last: route('service.post.last'),
    tag: {
        list: route('service.post.tag.list'),
    },
    show: (id) => route('service.post.show', id),
    destroy: (id) => route('service.post.destroy', id),
}
