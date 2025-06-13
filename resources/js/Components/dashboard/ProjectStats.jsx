import StatsCard from '@/Components/StatsCard.jsx'

const ProjectStats = ({ projects }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Projects</h2>
            </header>
            {projects && (
                <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <StatsCard
                        icon={
                            <i className="ri-shopping-cart-line text-gray-100 text-4xl"></i>
                        }
                        title="Leads"
                        value={projects.lead ? projects.lead.length : 0}
                    />
                    <StatsCard
                        icon={
                            <i className="ri-emotion-happy-line text-gray-100 text-4xl"></i>
                        }
                        title="Active"
                        value={projects.active ? projects.active.length : 0}
                    />
                    <StatsCard
                        icon={
                            <i className="ri-check-double-line text-gray-100 text-4xl"></i>
                        }
                        title="Complete"
                        value={projects.completed ? projects.completed.length : 0}
                    />
                </div>
            )}
        </section>
    )
}

export default ProjectStats
