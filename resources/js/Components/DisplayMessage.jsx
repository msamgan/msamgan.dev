export default function DisplayMessage({ text }) {
    return (
        <div className="card mt">
            <div className="text-nowrap">
                <p className={'p-3'}>{text}</p>
            </div>
        </div>
    )
}
