<script lang="ts" setup>
import { MenubarRadioGroup, useForwardPropsEmits } from 'radix-vue'

import type { MenubarRadioGroupEmits, MenubarRadioGroupProps } from 'radix-vue'

const props = defineProps<MenubarRadioGroupProps>()
const emits = defineEmits<MenubarRadioGroupEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <menubar-radio-group v-bind="forwarded">
        <slot></slot>
    </menubar-radio-group>
</template>
