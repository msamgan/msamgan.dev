import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            primary: "#5F199E",
            secondary: "#8C52FF",
            white: "#ffffff",
            black: "#000000",
            gray: {
                100: "#f7fafc",
                200: "#edf2f7",
                300: "#e2e8f0",
                400: "#cbd5e0",
                500: "#a0aec0",
                600: "#718096",
                700: "#4a5568",
                800: "#2d3748",
                900: "#1a202c"
            },
            blue: {
                100: "#ebf8ff",
                200: "#bee3f8",
                300: "#90cdf4",
                400: "#63b3ed",
                500: "#4299e1",
                600: "#3182ce",
                700: "#2b6cb0",
                800: "#2c5282",
                900: "#2a4365"
            },
            yellow: {
                100: "#fffff0",
                200: "#fefcbf",
                300: "#faf089",
                400: "#f6e05e",
                500: "#ecc94b",
                600: "#d69e2e",
                700: "#b7791f",
                800: "#975a16",
                900: "#744210"
            },
            green: {
                100: "#f0fff4",
                200: "#c6f6d5",
                300: "#9ae6b4",
                400: "#68d391",
                500: "#48bb78",
                600: "#38a169",
                700: "#2f855a",
                800: "#276749",
                900: "#22543d"
            },
            red: {
                100: "#fff5f5",
                200: "#fed7d7",
                300: "#feb2b2",
                400: "#fc8181",
                500: "#f56565",
                600: "#e53e3e",
                700: "#c53030",
                800: "#9b2c2c",
                900: "#742a2a"
            },
            purple: {
                100: "#faf5ff",
                200: "#e9d8fd",
                300: "#d6bcfa",
                400: "#b794f4",
                500: "#9f7aea",
                600: "#805ad5",
                700: "#6b46c1",
                800: "#553c9a",
                900: "#44337a"
            },
            indigo: {
                100: "#ebf4ff",
                200: "#c3dafe",
                300: "#a3bffa",
                400: "#7f9cf5",
                500: "#667eea",
                600: "#5a67d8",
                700: "#4c51bf",
                800: "#434190",
                900: "#3c366b"
            }
        }
    },

    plugins: [forms],
};
