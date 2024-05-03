<script lang="tsx">
import { Icon } from '#components'

import type { JSX } from 'vue/jsx-runtime'

export default defineComponent({
    props: {
        lensMake: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const key = computed(() => props.lensMake.toLowerCase())

        return () => {
            const icons: Record<string, JSX.Element> = {
                apple: <Icon name="ic:baseline-apple" size="28px"></Icon>,
                nikon: <nuxt-img src="images/nikon.svg" width="36px" height="36px"></nuxt-img>,
            }

            if (!icons[key.value]) return null

            return icons[key.value]
        }
    },
})
</script>
