<script lang="ts" setup>
import { DropdownMenuRadioGroup, useForwardPropsEmits } from 'radix-vue'

import type { DropdownMenuRadioGroupEmits, DropdownMenuRadioGroupProps } from 'radix-vue'

const props = defineProps<DropdownMenuRadioGroupProps>()

const emits = defineEmits<DropdownMenuRadioGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <dropdown-menu-radio-group v-bind="forwarded">
        <slot></slot>
    </dropdown-menu-radio-group>
</template>
