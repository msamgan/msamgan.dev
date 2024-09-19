export const user = {
    list: route('service.users'),
    show: (id) => route('service.user.show', id),
    destroy: (id) => route('service.user.destroy', id),
}
