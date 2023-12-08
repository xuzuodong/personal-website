import daisyui from 'daisyui'
import colors from 'tailwindcss/colors'
import themes from 'daisyui/src/theming/themes'

import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...themes.light,
                    primary: colors.blue[500],
                },
            },
            {
                dark: {
                    ...themes.dark,
                    'primary': colors.blue[400],
                    'base-100': 'black',
                },
            },
        ],
    },

}
