export const transaction = {
    list: (filters) => {
        return route('service.transactions', { ...filters })
    },
    descriptions: route('service.transaction.descriptions'),
}
