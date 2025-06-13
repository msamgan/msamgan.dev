import Master from '@/Layouts/Master.jsx'
import { Head, Link } from '@inertiajs/react'
import { formatDate, hasPermission, makeGetCall, ucfisrt } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns } from '@/Pages/Post/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'
import Badge from '@/Components/helpers/Badge.jsx'
import { fallbackImage } from '@/Utils/constants.js'
import Filters from '@/Pages/Post/Partials/Filters.jsx'
import ToggleFilterButton from '@/Components/ToggleFilterButton.jsx'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.post.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.post.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.post.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.post.delete)

    const [posts, setPosts] = useState([])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [params, setParams] = useState({})
    const [showFilters, setShowFilters] = useState(false)

    const getPosts = (filters = {}) => {
        makeGetCall(services.post.list(filters), setPosts, setLoading)
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
                <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-800">
                        <Name value={title} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge value={ucfisrt(status)} type={status === 'published' ? 'active' : 'cancelled'} />
                        <Badge value={formatDate(published_at)} type={'lead'} />

                        {tags.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1 sm:mt-0">
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
                            <Link
                                href={services.post.edit(post.id)}
                                className={
                                    'hover:bg-gray-50 focus:bg-gray-50 ml-4 flex w-full items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none'
                                }
                            >
                                <i className="ri-edit-line mr-2 text-sm text-primary"></i>
                                Edit
                            </Link>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={services.post.destroy(post.id)}
                                refresh={getPosts}
                                className={
                                    'hover:bg-red-50 focus:bg-red-50 flex w-full items-center px-4 py-2 text-sm text-red-600 transition-colors duration-200 hover:text-red-700 focus:text-red-700 focus:outline-none'
                                }
                            />
                        ) : null
                    }
                />
            ),
        }
    }

    useEffect(() => {
        // get the search query from the URL
        const params = new URLSearchParams(window.location.search)
        setParams(params)

        // if any params are present, set the show filters to true
        if (params.get('q') || params.get('status') || params.get('start-date') || params.get('end-date')) {
            setShowFilters(true)
        }

        if (hasListPermission) {
            getPosts({
                q: params.get('q'),
                status: params.get('status'),
                'start-date': params.get('start-date'),
                'end-date': params.get('end-date'),
            })
        }
    }, [])

    useEffect(() => {
        setData(posts.map((post) => processPost(post)))
    }, [posts])

    return (
        <Master user={auth.user} header={'Posts'}>
            <Head title="Posts" />

            <div className="container mx-auto px-4 pt-6">
                <PageHeader
                    title={'Business Post List'}
                    subtitle={"Find all of your business's posts and there associated details."}
                    action={
                        hasCreatePermission && (
                            <div className={'flex gap-2'}>
                                <Link
                                    href={services.post.create}
                                    className="border-transparent inline-flex items-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    <i className="ri-add-line mr-2 text-sm"></i>
                                    Create Post
                                </Link>
                                <ToggleFilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
                            </div>
                        )
                    }
                ></PageHeader>
            </div>

            <div className="container mx-auto px-4 py-6">
                <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-sm">
                    <Table
                        columns={columns}
                        data={data}
                        loading={loading}
                        permission={hasListPermission}
                        filters={showFilters ? <Filters params={params} /> : null}
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
