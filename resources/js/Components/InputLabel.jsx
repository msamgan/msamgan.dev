export default function InputLabel({ value, className = '', children, required = false, ...props }) {
    return (
        <label
            {...props}
            className={`text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-gray-800 ${className}`}
        >
            {value ? value : children} {required && <span className="text-red-500">*</span>}
        </label>
    )
}
