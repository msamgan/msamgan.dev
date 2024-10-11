export const columns = ['Name', 'Organization', 'Email', 'Phone', 'Actions']

export const dataObject = (client) => {
    return {
        name: client ? client.name : '',
        organization_id: client ? client?.organization.id : '',
        emails: client ? client?.emails?.map((email) => email.email).join(', ') : '',
        phones: client ? client?.phones?.map((phone) => phone.phone).join(', ') : '',
    }
}

export const pageObject = (client) => {
    return {
        title: client ? 'Edit Client' : 'Create Client',
    }
}
