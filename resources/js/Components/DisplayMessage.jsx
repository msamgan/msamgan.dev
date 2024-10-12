export default function DisplayMessage({ text }) {
    return (
        <div className="mt">
            <div className="text-nowrap">
                <p className={'p-3'}>{text}</p>
            </div>
        </div>
    )
}
