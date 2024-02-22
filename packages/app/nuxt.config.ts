import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['../ui'],

    modules: [
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
    ],

    runtimeConfig: {
        public: {
            sanityImageBaseUrl: '',
        },
    },

    routeRules: {
        '/sanity-image/**': { proxy: 'https://cdn.sanity.io/images/**' },
    },

    imports: {
        dirs: ['providers'],
    },

    image: {
        format: ['webp', 'jpeg', 'jpg'],
        providers: {
            mySanity: {
                name: 'mySanity',
                provider: '~/providers/sanity.ts',
                options: {
                    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
                },
            },
        },
    },

    typescript: {
        typeCheck: 'build',
        shim: false,
        tsConfig: {
            compilerOptions: {
                moduleResolution: 'node',
            },
        },
    },

    sanity: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        apiVersion: 'v2023-06-21',
    },

    css: [
        '../ui/assets/css/tailwind.css',
        '~/assets/css/main.css',
    ],

    googleFonts: {
        families: {
            'Playfair Display': 700,
            'BenchNine': 700,
        },
        display: 'block',
    },

    devtools: { enabled: true },
})
