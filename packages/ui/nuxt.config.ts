export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        'nuxt-icon',
    ],

    components: {
        // By default nuxt also auto-imports `.vue`,
        // but this causes nuxt to warn "Two component files resolving to the same name xxx"
        dirs: [{ path: '~/components/ui', extensions: ['vue'] }],
    },

    tailwindcss: { exposeConfig: true },

    colorMode: { classSuffix: '' },

    typescript: { shim: false },

    shadcn: { prefix: 'ui' },

    devtools: { enabled: true },
})
