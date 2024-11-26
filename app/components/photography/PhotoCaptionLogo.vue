<script lang="tsx">
import { Icon } from '#components'

import type { JSX } from 'vue/jsx-runtime'

export default defineComponent({
    props: {
        brand: {
            type: String,
        },
    },

    setup(props) {
        const key = computed(() => props.brand?.toLowerCase())

        return () => {
            const icons: Record<string, JSX.Element> = {
                apple: <Icon name="ic:baseline-apple" size="28px"></Icon>,
                nikon: <nuxt-img src="images/nikon.svg" width="36px" height="36px" class="w-7 sm:w-9"></nuxt-img>,
                fujifilm: <nuxt-img src="images/fujifilm.png" width="72px" class="object-contain pr-2 w-12 sm:w-[72px]"></nuxt-img>,
                sony: (
                    <div class="flex items-center justify-center bg-white h-[42px] rounded-md">
                        <nuxt-img src="images/sony.webp" width="48px" height="48px"></nuxt-img>
                    </div>
                ),
            }

            if (!key.value || !icons[key.value]) return null
            return icons[key.value]
        }
    },
})
</script>
