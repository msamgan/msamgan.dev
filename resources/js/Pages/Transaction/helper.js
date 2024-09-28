export const columns = ['Description', 'type', 'Amount', 'Date']

export const dataObject = (transaction) => {
    return {
        description: transaction ? transaction.description : '',
    }
}

export const pageObject = (transaction) => {
    return {
        title: transaction ? 'Edit Transaction' : 'Create Transaction',
    }
}
