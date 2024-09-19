export default function InputLabel({ value, className = '', children, required = false, ...props }) {
    return (
        <label {...props} className={className}>
            {value ? value : children} {required && <span className="text-red-500">*</span>}
        </label>
    )
}
