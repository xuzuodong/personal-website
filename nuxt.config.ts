import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    extends: ['nuxt-umami'],

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@vueuse/nuxt',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n',
    ],

    runtimeConfig: {
        public: {
            sanityImageBaseUrl: '',
        },
    },

    routeRules: {
        '/photography': {
            cache: {
                maxAge: 0,
                staleMaxAge: 10,
            },
        },
        '/sanity-image/**': { proxy: 'https://cdn.sanity.io/images/**' },
    },

    colorMode: {
        classSuffix: '',
    },

    i18n: {
        vueI18n: './app/i18n.ts',
        locales: [
            { code: 'en', name: 'English' },
            { code: 'zh-CN', name: '简体中文' },
            { code: 'zh-TW', name: '繁體中文' },
        ],
        defaultLocale: 'en',
    },

    imports: {
        dirs: ['providers'],
        imports: [
            { from: 'tailwind-variants', name: 'tv' },
            { from: 'tailwind-variants', name: 'VariantProps', type: true },
        ],
    },

    build: {
        transpile: ['vue-i18n'],
    },

    vite: {
        plugins: [
            VueI18nVitePlugin({
                include: [resolve(dirname(fileURLToPath(import.meta.url)), './app/locales/**/*.yaml')],
            }),
        ],
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
        '~/assets/css/main.css',
    ],

    googleFonts: {
        families: {
            'Playfair Display': [600],
            'Noto Serif SC': [600],
            'BenchNine': [300],
        },
        display: 'block',
    },

    devtools: { enabled: true },
    compatibilityDate: '2024-07-18',
})
