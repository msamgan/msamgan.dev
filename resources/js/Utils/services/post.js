export const post = {
    list: route('service.posts'),
    show: (id) => route('service.post.show', id),
    destroy: (id) => route('service.post.destroy', id),
}
