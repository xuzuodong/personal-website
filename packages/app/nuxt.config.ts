import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ['../ui'],

    modules: [
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

    i18n: {
        locales: [
            { code: 'en', name: 'English' },
            { code: 'zh-CN', name: '简体中文' },
            { code: 'zh-TW', name: '繁體中文' },
        ],
        defaultLocale: 'en',
    },

    imports: {
        dirs: ['providers'],
    },

    build: {
        transpile: ['vue-i18n'],
    },

    vite: {
        plugins: [
            VueI18nVitePlugin({
                include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/**/*.yaml')],
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
        typeCheck: 'build',
        shim: false,
        tsConfig: {
            compilerOptions: {
                moduleResolution: 'node',
                verbatimModuleSyntax: false,
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
            'Playfair Display': [600],
            'Noto Serif SC': [600],
            'BenchNine': [300],
        },
        display: 'block',
    },

    devtools: { enabled: true },
})
