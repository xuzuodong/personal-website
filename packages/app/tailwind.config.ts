import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    'DEFAULT': '1rem',
                    'sm': '2rem',
                    'lg': '3rem',
                    'xl': '5rem',
                    '2xl': '6rem',
                },
            },
        },
    },
}
