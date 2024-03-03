<script lang="ts" setup>
import { DropdownMenuTrigger } from 'radix-vue'

import type { DropdownMenuTriggerProps } from 'radix-vue'

const props = defineProps<DropdownMenuTriggerProps>()
</script>

<template>
    <dropdown-menu-trigger v-bind="props">
        <slot></slot>
    </dropdown-menu-trigger>
</template>
