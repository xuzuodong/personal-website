<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<template>
    <div class="mt-12">
        <h2 class="text-center text-2xl font-bold mb-4">{{ title }}</h2>

        <slot></slot>
    </div>
</template>
