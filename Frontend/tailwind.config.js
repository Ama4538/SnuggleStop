/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: `#fffeff`,
                },
                primary: {
                    DEFAULT: `#589a81`,
                },
                secondary: {
                    DEFAULT: `#e3e98f`,
                },
                accent: {
                    DEFAULT: `#e0eee9`
                }
            },
            fontFamily: {
                title: [`Inter Tight`, `sans-serif`],
                text: ['Nunito', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

