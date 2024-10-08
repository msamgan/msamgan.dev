export const columns = ['Name', 'Organization', 'Email', 'Phone', 'Actions']

export const dataObject = (client) => {
    return {
        name: client ? client.name : '',
        organization_id: client ? client?.organization.id : '',
        email: client ? client.email.map((email) => email.email).join(', ') : '',
        phone: client ? client.phone.map((phone) => phone.phone).join(', ') : '',
    }
}

export const pageObject = (client) => {
    return {
        title: client ? 'Edit Client' : 'Create Client',
    }
}
