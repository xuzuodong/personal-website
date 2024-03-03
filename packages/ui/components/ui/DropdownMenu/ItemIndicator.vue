<script lang="ts" setup>
import { DropdownMenuItemIndicator } from 'radix-vue'

import type { DropdownMenuItemIndicatorProps } from 'radix-vue'

const props = defineProps<
    DropdownMenuItemIndicatorProps & {
        icon?: string
    }
  >()
</script>

<template>
    <dropdown-menu-item-indicator v-bind="reactiveOmit(props, 'icon')">
        <slot>
            <icon v-if="icon" :name="icon" class="h-4 w-4" />
        </slot>
    </dropdown-menu-item-indicator>
</template>
