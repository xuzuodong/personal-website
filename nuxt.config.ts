import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
    ],
    sanity: {
        projectId: '5pzxr6po',
    },
    runtimeConfig: {
        sanity: {
            token: process.env.NUXT_SANITY_TOKEN,
        },
    },
    devtools: { enabled: true },
})
