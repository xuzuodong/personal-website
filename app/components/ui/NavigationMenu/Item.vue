<script lang="ts" setup>
import { NavigationMenuItem } from 'radix-vue'

import type { NavigationMenuItemProps } from 'radix-vue'

const props = defineProps<NavigationMenuItemProps>()
</script>

<template>
    <navigation-menu-item v-bind="props">
        <slot></slot>
    </navigation-menu-item>
</template>
