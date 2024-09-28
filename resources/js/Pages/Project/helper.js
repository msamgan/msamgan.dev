export const columns = ['Name', 'Actions']

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
