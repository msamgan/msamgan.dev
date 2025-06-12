import { forwardRef, useEffect, useRef } from 'react'

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
    }, [])

    return <input
        {...props}
        type={type}
        className={`w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20 mt-1 ${className}`}
        ref={input}
    />
})
