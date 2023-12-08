import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
        '@nuxt/image',
    ],

    runtimeConfig: {
        sanity: {
            token: process.env.NUXT_SANITY_TOKEN,
        },
    },

    typescript: {
        typeCheck: 'build',
        shim: false,
    },

    css: ['~/assets/css/main.css'],

    devtools: { enabled: true },

    sanity: { projectId: '5pzxr6po' },

    colorMode: { classSuffix: '' },
})
