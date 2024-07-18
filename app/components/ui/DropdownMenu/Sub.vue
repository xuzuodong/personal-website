<script lang="ts" setup>
import { DropdownMenuSub, useForwardPropsEmits } from 'radix-vue'

import type { DropdownMenuSubEmits, DropdownMenuSubProps } from 'radix-vue'

const props = defineProps<DropdownMenuSubProps>()
const emits = defineEmits<DropdownMenuSubEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <dropdown-menu-sub v-bind="forwarded">
        <slot></slot>
    </dropdown-menu-sub>
</template>
