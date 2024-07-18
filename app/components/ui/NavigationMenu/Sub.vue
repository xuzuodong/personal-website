<script lang="ts" setup>
import { NavigationMenuSub, useForwardPropsEmits } from 'radix-vue'

import type { NavigationMenuSubEmits, NavigationMenuSubProps } from 'radix-vue'

const props = defineProps<NavigationMenuSubProps>()
const emits = defineEmits<NavigationMenuSubEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <navigation-menu-sub v-bind="forwarded">
        <slot></slot>
    </navigation-menu-sub>
</template>
