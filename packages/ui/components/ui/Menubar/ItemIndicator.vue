<script lang="ts" setup>
import { MenubarItemIndicator } from 'radix-vue'

import type { MenubarItemIndicatorProps } from 'radix-vue'

const props = defineProps<
    MenubarItemIndicatorProps & {
        icon?: string
    }
  >()
</script>

<template>
    <menubar-item-indicator v-bind="reactiveOmit(props, 'icon')">
        <slot>
            <icon v-if="icon" :name="icon" class="h-4 w-4" />
        </slot>
    </menubar-item-indicator>
</template>
