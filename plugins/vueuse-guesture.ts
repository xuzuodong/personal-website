import { GesturePlugin } from '@vueuse/gesture'

export default defineNuxtPlugin({
    name: 'vueuse-guesture',
    enforce: 'pre',
    setup({ vueApp }) {
        vueApp.use(GesturePlugin)
    },
})
