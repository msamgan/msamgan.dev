export const project = {
    list: route('service.projects'),
    show: (id) => route('service.project.show', id),
    destroy: (id) => route('service.project.destroy', id),
}
