<script lang="ts" setup>
import { DropdownMenuGroup } from 'radix-vue'

import type { DropdownMenuGroupProps } from 'radix-vue'

const props = defineProps<DropdownMenuGroupProps>()
</script>

<template>
    <dropdown-menu-group v-bind="props">
        <slot></slot>
    </dropdown-menu-group>
</template>
