/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617",
                foreground: "#f8fafc",
                card: {
                    DEFAULT: "rgba(30, 41, 59, 0.5)",
                    foreground: "#f8fafc",
                },
                primary: {
                    DEFAULT: "#6366f1",
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#f43f5e",
                    foreground: "#ffffff",
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
