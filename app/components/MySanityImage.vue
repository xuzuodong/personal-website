<script lang="ts">
import { imgProps } from '#image/components/NuxtImg.vue'

export default defineComponent({
    props: {
        ...imgProps,
        provider: {
            type: String,
            default: 'mySanity',
        },
    },
})
</script>

<template>
    <nuxt-img v-bind="$props" />
</template>
