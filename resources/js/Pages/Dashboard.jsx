import { Head } from '@inertiajs/react'
import Master from '@/Layouts/Master.jsx'
import StatsCard from '@/Components/StatsCard.jsx'
import { useEffect, useState } from 'react'
import { dashboardData } from '@actions/DashboardController'

const ProjectSection = ({ projects }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Projects</h2>
            </header>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                            <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                            <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                        </svg>
                    }
                    title="Leads"
                    value={projects.lead ? projects.lead.length : 0}
                />
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                            <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                            <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                            <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                        </svg>
                    }
                    title="Active"
                    value={projects.active ? projects.active.length : 0}
                />
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                            <rect width="32" height="32" x="80" y="264"></rect>
                            <rect width="32" height="32" x="240" y="128"></rect>
                            <rect width="32" height="32" x="136" y="168"></rect>
                            <rect width="32" height="32" x="400" y="264"></rect>
                            <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                        </svg>
                    }
                    title="Complete"
                    value={projects.completed ? projects.completed.length : 0}
                />
            </div>
        </section>
    )
}

const ClientAndOrganizationSection = ({ client, organization }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Clients & Organizations</h2>
            </header>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    }
                    title="Clients"
                    value={client}
                />
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            />
                        </svg>
                    }
                    title="Organizations"
                    value={organization}
                />
            </div>
        </section>
    )
}

const PostSection = ({ publishedPosts, draftPosts }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Posts</h2>
            </header>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path d="M464,64H48A16,16,0,0,0,32,80V432a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V80A16,16,0,0,0,464,64ZM256,96a32,32,0,1,1-32,32A32,32,0,0,1,256,96Zm96,320H160V352H352Zm0-96H160V256H352Zm0-96H160V160H352Z"></path>
                        </svg>
                    }
                    title="Published"
                    value={publishedPosts}
                />
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path d="M464,64H48A16,16,0,0,0,32,80V432a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V80A16,16,0,0,0,464,64ZM256,96a32,32,0,1,1-32,32A32,32,0,0,1,256,96Zm96,320H160V352H352Zm0-96H160V256H352Zm0-96H160V160H352Z"></path>
                        </svg>
                    }
                    title="Draft"
                    value={draftPosts}
                />
            </div>
        </section>
    )
}

export default function Dashboard({ auth, projects }) {
    const [stats, setStats] = useState({})

    useEffect(() => {
        dashboardData({}).then(async (r) => {
            setStats(await r.json())
        })
    }, [])

    return (
        <Master user={auth.user} header={'Dashboard'}>
            <Head title="Dashboard" />

            <div className="col-12">
                You're logged in as {auth.user.name} ({auth.user.email}).
            </div>
            <hr className={'my-3 text-gray-300'} />

            {
                stats && <div>
                    <ProjectSection projects={projects} />
                    <ClientAndOrganizationSection client={stats?.client} organization={stats?.organization} />
                    <PostSection publishedPosts={stats?.publishedPosts} draftPosts={stats?.draftPosts} />
                </div>
            }

        </Master>
    )
}
