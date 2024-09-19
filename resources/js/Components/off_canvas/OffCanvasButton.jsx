export default function OffCanvasButton({ id, children, className = 'btn btn-primary', ...props }) {
    return (
        <span
            className={className}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={'#' + id}
            aria-controls={id}
            {...props}
        >
            {children}
        </span>
    )
}
