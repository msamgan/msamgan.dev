export default function PageHeader({ title, subtitle, action = null }) {
    return (
        <div className="col-12 mb-10 mt-6">
            <div className={'flex justify-between'}>
                <div>
                    <h4 className="text-2xl font-semibold">{title}</h4>
                    <p className="mb-0 mt-1">{subtitle}</p>
                </div>
                <div>{action ? action : null}</div>
            </div>
        </div>
    )
}
