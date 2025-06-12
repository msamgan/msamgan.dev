export default function PageHeader({ title, subtitle, action = null }) {
    return (
        <div className="w-full mb-8 mt-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">{title}</h1>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-3xl">{subtitle}</p>
                </div>
                {action && <div className="flex-shrink-0 mt-2 sm:mt-0">{action}</div>}
            </div>
        </div>
    )
}
