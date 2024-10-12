export const columns = ['Description', 'Project', 'type', 'Amount', 'Date']

export const dataObject = (transaction) => {
    return {
        description: transaction ? transaction.description : '',
        type: transaction ? transaction.type : '',
        amount: transaction ? transaction.amount : '',
        date: transaction ? transaction.date : '',
        project_id: transaction ? transaction.project_id : '',
    }
}

export const pageObject = (transaction) => {
    return {
        title: transaction ? 'Edit Transaction' : 'Create Transaction',
    }
}
