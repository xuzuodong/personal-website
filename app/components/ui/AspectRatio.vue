<script lang="ts" setup>
import { AspectRatio } from 'radix-vue'

import type { AspectRatioProps } from 'radix-vue'

const props = defineProps<AspectRatioProps>()
</script>

<template>
    <aspect-ratio v-bind="props">
        <slot></slot>
    </aspect-ratio>
</template>
