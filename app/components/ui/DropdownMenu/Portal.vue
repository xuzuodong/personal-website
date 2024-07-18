<script lang="ts" setup>
import { DropdownMenuPortal } from 'radix-vue'

import type { DropdownMenuPortalProps } from 'radix-vue'

const props = defineProps<DropdownMenuPortalProps>()
</script>

<template>
    <dropdown-menu-portal v-bind="props">
        <slot></slot>
    </dropdown-menu-portal>
</template>
