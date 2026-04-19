/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")], // <--- THIS IS THE MISSING LINK
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6B46C1',
                    light: '#9333EA',
                },
                background: {
                    white: '#FFFFFF',
                    soft: '#F9F5FF',
                },
                text: {
                    main: '#1F2937',
                    muted: '#6B7280',
                }
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
            }
        },
    },
    plugins: [],
};