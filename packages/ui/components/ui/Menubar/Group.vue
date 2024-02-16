<script lang="ts" setup>
import { MenubarGroup } from 'radix-vue'

import type { MenubarGroupProps } from 'radix-vue'

const props = defineProps<MenubarGroupProps>()
</script>

<template>
    <menubar-group v-bind="props">
        <slot></slot>
    </menubar-group>
</template>
