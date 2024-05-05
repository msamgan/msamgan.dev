export default function Portfolio({className = ''}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-0.5 0 25 25"
            className={className}
        >
            <g
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            >
                <path d="M22 10.32a4 4 0 00-4-4H6a4 4 0 00-4 4M22 10.32c-6.09 6-13.91 6-20 0"></path>
                <path
                    d="M22 10.32l-1 8a4.63 4.63 0 01-4.47 4H7.39a4.63 4.63 0 01-4.47-4l-1-8M8.01 6.04a4 4 0 118 0"></path>
            </g>
        </svg>
    );
}
