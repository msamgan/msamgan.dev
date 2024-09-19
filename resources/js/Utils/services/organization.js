export const organization = {
    list: route('service.organizations'),
    show: (id) => route('service.organization.show', id),
    destroy: (id) => route('service.organization.destroy', id),
}
