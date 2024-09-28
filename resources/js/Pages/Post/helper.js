export const columns = ['Title', 'Actions']

export const dataObject = (post) => {
    return {
        title: post ? post.title : '',
    }
}

export const pageObject = (post) => {
    return {
        title: post ? 'Edit Post' : 'Create Post',
    }
}
