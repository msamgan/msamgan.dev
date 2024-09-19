export const columns = ['Name', 'Role', 'Status', 'Actions']

export const dataObject = (user) => {
    return {
        name: user ? user.name : '',
        email: user ? user.email : '',
        password: '',
        role: user ? user.role.id : '',
    }
}

export const pageObject = (user) => {
    return {
        title: user ? 'Edit User' : 'Create User',
    }
}
