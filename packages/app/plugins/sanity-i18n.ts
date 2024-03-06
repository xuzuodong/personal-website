import type { PickupFallbackLocales, UnionToTuple } from '@intlify/core'
import type { Value } from 'sanity-plugin-internationalized-array'

export default defineNuxtPlugin({
    setup() {
        const { $i18n } = useNuxtApp()

        const map: Record<string, number> = {
            'en': 0,
            'zh-CN': 1,
            'zh-TW': 2,
        }

        const fallbackLocale = $i18n.fallbackLocale.value as { [locale in string]?: Array<PickupFallbackLocales<UnionToTuple<string>>> }

        return {
            provide: {
                sanityI18n: (values?: Value[]) => {
                    if (!values) return
                    const locale = $i18n.locale.value
                    const locales = [locale]
                    if (Array.isArray(fallbackLocale[locale])) {
                        locales.push(...fallbackLocale[locale]!)
                    }
                    for (const l of locales) {
                        const fallbackTranslated = values[map[l]]
                        if (fallbackTranslated) return fallbackTranslated.value
                    }
                },
            },
        }
    },
})
