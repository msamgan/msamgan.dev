export const transaction = {
    list: route('service.transactions'),
    show: (id) => route('service.transaction.show', id),
    destroy: (id) => route('service.transaction.destroy', id),
}
