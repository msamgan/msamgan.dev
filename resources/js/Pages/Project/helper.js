export const columns = ['Name', 'Client', 'Status', 'Dates', 'Costing', 'Type', 'Actions']

export const dataObject = (project) => {
    return {
        name: project ? project.name : '',
        description: project ? project.description : '',
        document_url: project ? project.document_url : '',
        status: project ? project.status : 'active',
        client_id: project ? project.client_id : '',
        start_date: project ? project.start_date : '',
        end_date: project ? project.end_date : '',
        costing: project ? project.costing : '',
        type: project ? project.type : 'singular',
    }
}

export const pageObject = (project) => {
    return {
        title: project ? 'Edit Project' : 'Create Project',
    }
}
