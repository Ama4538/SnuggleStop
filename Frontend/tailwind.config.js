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
                text: {
                    DEFAULT: `#030002`,
                },
                primary: {
                    DEFAULT: `#e2afbd`,
                },
                secondary: {
                    DEFAULT: `#89b8bd`,
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

