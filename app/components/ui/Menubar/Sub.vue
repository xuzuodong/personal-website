<script lang="ts" setup>
import { MenubarSub, useForwardPropsEmits } from 'radix-vue'

import type { MenubarSubEmits, MenubarSubProps } from 'radix-vue'

const props = defineProps<MenubarSubProps>()
const emits = defineEmits<MenubarSubEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <menubar-sub v-bind="forwarded">
        <slot></slot>
    </menubar-sub>
</template>
