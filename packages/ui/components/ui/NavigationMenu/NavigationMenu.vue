<script lang="ts" setup>
import { NavigationMenuRoot, useForwardPropsEmits } from 'radix-vue'

import type { NavigationMenuRootEmits, NavigationMenuRootProps } from 'radix-vue'

const props = defineProps<
    NavigationMenuRootProps & {
        /** Custom class(es) to add to the parent */
        class?: any
    }
  >()
const emits = defineEmits<NavigationMenuRootEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props, 'class'), emits)

const styles = tv({
    base: 'relative flex max-w-max flex-1 items-center justify-center',
})
</script>

<template>
    <navigation-menu-root :class="styles({ class: props.class })" v-bind="forwarded">
        <slot></slot>
        <ui-navigation-menu-viewport />
    </navigation-menu-root>
</template>
