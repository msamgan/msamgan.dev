export const columns = ['Title', 'Actions']

export const dataObject = (post) => {
    return {
        title: post ? post.title : '',
        content: post ? post.content : {},
        status: post ? post.status : 'draft',
        featured_image: post ? post.featured_image : '',
        slug: post ? post.slug : '',
        excerpt: post ? post.excerpt : '',
        tags: post?.tags ? post.tags.map((tag) => tag.name) : [],
    }
}

export const pageObject = (post) => {
    return {
        title: post ? 'Edit Post' : 'Create Post',
    }
}
