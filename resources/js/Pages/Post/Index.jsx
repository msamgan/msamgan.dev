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

    const getPosts = () => {
        makeGetCall(services.post.list, setPosts, setLoading)
    }

    const getPost = (id) => {
        makeGetCall(services.post.show(id), setPost, setLoading)
    }

    const CreateTitleAttribute = ({ title, tags, featured_image, status, published_at }) => {
        return (
            <div className="align-items-center flex gap-6 space-x-3">
                <div className="mt-2">
                    <img
                        alt={'image'}
                        src={featured_image ? featured_image : fallbackImage}
                        className="h-11 w-11 rounded-full"
                    />
                </div>
                <div>
                    <Name value={title} />
                    <div className={'align-items-center mt-4 flex flex-row justify-start'}>
                        <span className={'mr-4 space-x-1'}>
                            <Badge value={ucfisrt(status)} type={status === 'published' ? 'active' : 'cancelled'} />
                            <Badge value={formatDate(published_at)} type={'lead'} />
                        </span>
                        <span>
                            {tags.length > 0 ? (
                                <div className="text-xs">
                                    {tags.map((tag) => {
                                        return (
                                            <span
                                                key={tag.id}
                                                className="rounded-full bg-gray-200 px-2 py-1 text-gray-900"
                                            >
                                                {tag.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            ) : null}
                        </span>
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
                                }}
                                className={'dropdown-item'}
                                id="postFormCanvas"
                            >
                                <i className="ri-pencil-line me-1 text-primary"></i> Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={services.post.destroy(post.id)}
                                refresh={getPosts}
                                className={'dropdown-item'}
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

            <PageHeader
                title={'Business Post List'}
                subtitle={'Find all of your business’s posts and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setPost(null)
                                setPageData(pageObject(null))
                            }}
                            id="postFormCanvas"
                        >
                            <i className="ri-add-line me-2"></i>
                            Create Post
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas id="postFormCanvas" title={pageData.title} w={'w-100'} childrenClass={'mx-auto w-2/3'}>
                    <Form getPosts={getPosts} postData={post} />
                </OffCanvas>
            )}

            <div className="col-12">
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
        </Master>
    )
}
