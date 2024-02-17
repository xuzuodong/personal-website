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

    routeRules: {
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
