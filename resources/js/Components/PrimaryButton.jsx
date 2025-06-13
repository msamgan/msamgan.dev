export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-lg border border-transparent bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-secondary hover:shadow focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1 active:bg-primary/90 ${
                    disabled && 'opacity-50 cursor-not-allowed'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    )
}
