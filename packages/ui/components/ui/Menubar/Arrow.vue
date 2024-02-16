<script lang="ts" setup>
import { MenubarArrow } from 'radix-vue'

import type { MenubarArrowProps } from 'radix-vue'

const props = withDefaults(defineProps<MenubarArrowProps>(), {
    width: 10,
    height: 5,
})
</script>

<template>
    <menubar-arrow v-bind="props" />
</template>
