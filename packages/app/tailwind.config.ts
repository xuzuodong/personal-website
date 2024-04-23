import defaultTheme from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        container: {
            center: true,
            padding: {
                'DEFAULT': '1rem',
                'sm': '2rem',
                'lg': '3rem',
                'xl': '5rem',
                '2xl': '12rem',
            },
        },
    },
}
