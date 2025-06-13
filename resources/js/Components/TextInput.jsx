import { forwardRef, useEffect, useRef } from 'react'

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
    }, [])

    return (
        <input
            {...props}
            type={type}
            className={`mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 placeholder:text-gray-500 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0 ${className}`}
            ref={input}
        />
    )
})
