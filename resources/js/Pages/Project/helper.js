export const columns = ['Name', 'Client', 'Status', 'Dates', 'Costing', 'Type', 'Actions']

export const dataObject = (project) => {
    return {
        name: project ? project.name : '',
    }
}

export const pageObject = (project) => {
    return {
        title: project ? 'Edit Project' : 'Create Project',
    }
}
