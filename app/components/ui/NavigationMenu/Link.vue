<script lang="ts" setup>
import { NavigationMenuLink, useForwardPropsEmits } from 'radix-vue'

import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'radix-vue'

const props = defineProps<NavigationMenuLinkProps>()
const emits = defineEmits<NavigationMenuLinkEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <navigation-menu-link v-bind="forwarded">
        <slot></slot>
    </navigation-menu-link>
</template>
