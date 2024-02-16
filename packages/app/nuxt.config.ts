import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['../ui'],

    modules: [
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
        '@nuxt/image',
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

    css: [
        '../ui/assets/css/tailwind.css',
        '~/assets/css/main.css',
    ],

    sanity: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        apiVersion: 'v2023-06-21',
    },

    devtools: { enabled: true },
})
