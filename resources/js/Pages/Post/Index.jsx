import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { formatDate, hasPermission, makeGetCall, ucfisrt } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Post/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Post/Partials/Form.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'
import Badge from '@/Components/helpers/Badge.jsx'
import { fallbackImage } from '@/Utils/constants.js'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.post.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.post.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.post.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.post.delete)

    const [posts, setPosts] = useState([])
    const [data, setData] = useState([])
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

    const getPosts = () => {
        makeGetCall(services.post.list, setPosts, setLoading)
    }

    const getPost = (id) => {
        makeGetCall(services.post.show(id), setPost, setLoading)
    }

    const CreateTitleAttribute = ({ title, tags, featured_image, status, published_at }) => {
        return (
            <div className="flex items-center space-x-4">
                <div>
                    <img
                        alt={'Post thumbnail'}
                        src={featured_image ? featured_image : fallbackImage}
                        className="h-12 w-12 rounded-lg object-cover shadow-sm"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-800">
                        <Name value={title} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge value={ucfisrt(status)} type={status === 'published' ? 'active' : 'cancelled'} />
                        <Badge value={formatDate(published_at)} type={'lead'} />

                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1 sm:mt-0">
                                {tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    const processPost = (post) => {
        return {
            Title: (
                <CreateTitleAttribute
                    title={post.title}
                    tags={post.tags}
                    featured_image={post.featured_image}
                    status={post.status}
                    published_at={post.published_at}
                />
            ),
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getPost(post.id)
                                    setPageData(pageObject(post))
                                    setIsOffCanvasOpen(true)
                                }}
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary focus:outline-none focus:bg-gray-50 focus:text-primary transition-colors duration-200'}
                                id="postFormCanvas"
                            >
                                <svg className="h-4 w-4 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                                Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={services.post.destroy(post.id)}
                                refresh={getPosts}
                                className={'flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:bg-red-50 focus:text-red-700 transition-colors duration-200'}
                            />
                        ) : null
                    }
                />
            ),
        }
    }

    useEffect(() => {
        if (hasListPermission) {
            getPosts()
        }
    }, [])

    useEffect(() => {
        setData(posts.map((post) => processPost(post)))
    }, [posts])

    return (
        <Master user={auth.user} header={'Posts'}>
            <Head title="Posts" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <PageHeader
                    title={'Business Post List'}
                    subtitle={'Find all of your business\'s posts and there associated details.'}
                    action={
                        hasCreatePermission && (
                            <OffCanvasButton
                                onClick={() => {
                                    setPost(null)
                                    setPageData(pageObject(null))
                                    setIsOffCanvasOpen(true)
                                }}
                                id="postFormCanvas"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                            >
                                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                Create Post
                            </OffCanvasButton>
                        )
                    }
                ></PageHeader>
            </div>

            {hasCreatePermission && (
                <OffCanvas
                    id="postFormCanvas"
                    title={pageData.title}
                    childrenClass={'mx-auto w-full md:w-2/3'}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getPosts={getPosts}
                        postData={post}
                        onSuccess={() => setIsOffCanvasOpen(false)}
                    />
                </OffCanvas>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="mt-8 bg-white overflow-hidden shadow-sm rounded-lg">
                    <Table
                        columns={columns}
                        data={data}
                        loading={loading}
                        permission={hasListPermission}
                        tdClassName={[
                            {
                                column: 'Title',
                                className: 'text-wrap',
                            },
                            {
                                column: 'Excerpt',
                                className: 'text-wrap',
                            },
                        ]}
                    />
                </div>
            </div>
        </Master>
    )
}
