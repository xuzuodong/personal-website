import messages from '@intlify/unplugin-vue-i18n/messages'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages,
    ssr: true,
    fallbackLocale: {
        'zh-TW': ['zh-CN', 'en'],
        'zh-CN': ['zh-TW', 'en'],
    },
}))
