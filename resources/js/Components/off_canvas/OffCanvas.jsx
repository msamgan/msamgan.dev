export default function OffCanvas({ id, title, w = 'w-75', children, childrenClass = '' }) {
    return (
        <div className={w + ' offcanvas offcanvas-end'} tabIndex="-1" id={id} aria-labelledby={id + 'Label'}>
            <div className="offcanvas-header">
                <h5 id={id + 'Label'} className="offcanvas-title ml-3 text-2xl">
                    {title}
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className={'offcanvas-body flex-grow-0 ' + childrenClass}>{children}</div>
        </div>
    )
}
