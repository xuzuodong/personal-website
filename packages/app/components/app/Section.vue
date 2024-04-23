<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<template>
    <div class="mt-16">
        <div class="text-center">
            <h2
                class="
                mb-4 lg:mb-12  font-mono font-bold
                text-2xl lg:text-4xl
                bg-clip-text text-transparent inline-block bg-gradient-to-r from-foreground to-muted-foreground
            "
            >
                {{ title }}
            </h2>
        </div>
        <slot></slot>
    </div>
</template>
