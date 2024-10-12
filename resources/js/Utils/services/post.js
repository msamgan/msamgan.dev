export const post = {
    list: route('service.posts'),
    last: route('service.post.last'),
    show: (id) => route('service.post.show', id),
    destroy: (id) => route('service.post.destroy', id),
}
