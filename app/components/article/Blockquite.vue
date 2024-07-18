<script setup lang="ts">
import type { ArbitraryTypedObject, PortableTextBlock, PortableTextMarkDefinition, PortableTextSpan } from '@portabletext/types'
import type { PortableTextComponentProps } from '@portabletext/vue'

defineProps<
    PortableTextComponentProps<PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>>
>()
</script>

<template>
    <div class="flex">
        <div class="w-1 shrink-0 bg-muted-foreground"></div>
        <blockquote class="flex-1 px-6 py-4 bg-muted text-muted-foreground">
            {{ value.children.at(0)?.text }}
        </blockquote>
    </div>
</template>
