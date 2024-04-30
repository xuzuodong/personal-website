// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@vueuse/nuxt',
        'nuxt-icon',
    ],

    tailwindcss: {
        exposeConfig: true,
    },

    colorMode: {
        classSuffix: '',
    },

    typescript: {
        shim: false,
    },

    imports: {
        imports: [
            { from: 'tailwind-variants', name: 'tv' },
            { from: 'tailwind-variants', name: 'VariantProps', type: true },
        ],
    },
})