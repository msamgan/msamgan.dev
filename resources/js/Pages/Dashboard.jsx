import { Head } from '@inertiajs/react'
import Master from '@/Layouts/Master.jsx'
import { useEffect, useState } from 'react'
import { dashboardData } from '@actions/DashboardController'
import ProjectStats from '@/Components/dashboard/ProjectStats.jsx'
import ClientAndOrganizationStats from '@/Components/dashboard/ClientAndOrganizationStats.jsx'
import PostStats from '@/Components/dashboard/PostStats.jsx'

export default function Dashboard({ auth, projects }) {
    const [stats, setStats] = useState(null)

    const getDashboardData = async () => {
        setStats(await dashboardData.data({}))
    }

    useEffect(() => {
        getDashboardData().then()
    }, [])

    return (
        <Master user={auth.user} header={'Dashboard'}>
            <Head title="Dashboard" />

            <div className="col-12">
                You're logged in as {auth.user.name} ({auth.user.email}).
            </div>
            <hr className={'my-3 text-gray-300'} />

            {stats ? (
                <div>
                    <ProjectStats projects={stats?.projects} />
                    <ClientAndOrganizationStats client={stats?.client} organization={stats?.organization} />
                    <PostStats publishedPosts={stats?.publishedPosts} draftPosts={stats?.draftPosts} />
                </div>
            ) : (
                <p>gathering stats....</p>
            )}
        </Master>
    )
}
