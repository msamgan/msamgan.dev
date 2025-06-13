export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'flex items-center text-sm font-medium text-red-600 ' + className}>
            <i className="ri-error-warning-fill mr-2 text-sm"></i>
            {message}
        </p>
    ) : null
}
