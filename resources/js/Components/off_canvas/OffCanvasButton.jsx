export default function OffCanvasButton({
    id,
    children,
    className = 'inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-medium text-sm text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200',
    onClick,
    ...props
}) {
    return (
        <button className={className} type="button" aria-controls={id} onClick={onClick} {...props}>
            {children}
        </button>
    )
}
