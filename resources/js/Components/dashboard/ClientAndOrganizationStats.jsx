import StatsCard from '@/Components/StatsCard.jsx'

const ClientAndOrganizationStats = ({ client, organization }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Clients & Organizations</h2>
            </header>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={
                        <i className="ri-user-line text-gray-100 text-4xl"></i>
                    }
                    title="Clients"
                    value={client}
                />
                <StatsCard
                    icon={
                        <i className="ri-building-line text-gray-100 text-4xl"></i>
                    }
                    title="Organizations"
                    value={organization}
                />
            </div>
        </section>
    )
}

export default ClientAndOrganizationStats
