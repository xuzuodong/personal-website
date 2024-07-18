<script lang="ts" setup>
import { MenubarPortal } from 'radix-vue'

import type { MenubarPortalProps } from 'radix-vue'

const props = defineProps<MenubarPortalProps>()
</script>

<template>
    <menubar-portal v-bind="props">
        <slot></slot>
    </menubar-portal>
</template>
