import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
        '@nuxt/image',
        'nuxt-icon',
    ],

    typescript: {
        typeCheck: 'build',
        shim: false,
    },

    css: [
        '~/assets/css/main.css',
    ],

    devtools: { enabled: true },

    sanity: { projectId: process.env.SANITY_PROJECT_ID },

    colorMode: {
        classSuffix: '',
    },
})
