export const role = {
    list: route('service.roles'),
    show: (id) => route('service.role.show', id),
    destroy: (id) => route('service.role.destroy', id),
}
