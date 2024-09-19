export const columns = ['Name', 'Location', 'Actions']

export const dataObject = (organization) => {
    return {
        name: organization ? organization.name : '',
        location: organization ? organization.location : '',
    }
}

export const pageObject = (organization) => {
    return {
        title: organization ? 'Edit Organization' : 'Create Organization',
    }
}
