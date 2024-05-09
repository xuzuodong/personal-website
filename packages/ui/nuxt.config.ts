export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        'nuxt-icon',
    ],

    tailwindcss: { exposeConfig: true },

    colorMode: { classSuffix: '' },

    typescript: { shim: false },

    shadcn: { prefix: 'ui' },

    devtools: { enabled: true },
})
