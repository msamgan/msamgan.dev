export const client = {
    list: route('service.clients'),
    show: (id) => route('service.client.show', id),
    destroy: (id) => route('service.client.destroy', id),
}
