export default function StatCard({ icon, title, value }) {
    return (
        <div className="bg-gray-50 flex space-x-4 rounded-lg p-4 text-gray-800 md:space-x-6">
            <div className="flex justify-center rounded-lg bg-primary p-3 align-middle sm:p-4">{icon}</div>
            <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-light leading-none">{value}</p>
                <p className="mt-2 capitalize">{title}</p>
            </div>
        </div>
    )
}
