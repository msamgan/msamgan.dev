export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `border-transparent inline-flex items-center justify-center rounded-lg border bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-secondary hover:shadow focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1 active:bg-primary/90 ${
                    disabled && 'cursor-not-allowed opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    )
}
