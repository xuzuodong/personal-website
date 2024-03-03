<script lang="ts" setup>
import { DropdownMenuCheckboxItem, useForwardPropsEmits } from 'radix-vue'

import type { DropdownMenuCheckboxItemEmits, DropdownMenuCheckboxItemProps } from 'radix-vue'

const props = defineProps<
    DropdownMenuCheckboxItemProps & {
        /** Custom class(es) to add to the parent */
        class?: any
        /** The shorttcut text to display */
        shortcut?: string
        /** The title text to display */
        title?: string
    }
  >()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props, 'title', 'shortcut', 'class'), emits)

const styles = tv({
    base: 'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
})
</script>

<template>
    <dropdown-menu-checkbox-item v-bind="forwarded" :class="styles({ class: props.class })">
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-primary">
            <ui-dropdown-menu-item-indicator icon="lucide:check" />
        </span>
        <slot>
            <span v-if="title">{{ title }}</span>
        </slot>
        <slot name="shortcut">
            <ui-dropdown-menu-shortcut v-if="shortcut">{{ shortcut }}</ui-dropdown-menu-shortcut>
        </slot>
    </dropdown-menu-checkbox-item>
</template>
