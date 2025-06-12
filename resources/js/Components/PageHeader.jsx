export default function PageHeader({ title, subtitle, action = null }) {
    return (
        <div className="mb-8 mt-4 w-full">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-800">{title}</h1>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">{subtitle}</p>
                </div>
                {action && <div className="mt-2 flex-shrink-0 sm:mt-0">{action}</div>}
            </div>
        </div>
    )
}
