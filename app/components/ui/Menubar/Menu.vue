<script lang="ts" setup>
import { MenubarMenu } from 'radix-vue'

import type { MenubarMenuProps } from 'radix-vue'

const props = defineProps<MenubarMenuProps>()
</script>

<template>
    <menubar-menu v-bind="props">
        <slot></slot>
    </menubar-menu>
</template>
