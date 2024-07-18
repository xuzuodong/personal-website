<script setup lang="ts">
const props = defineProps<{
    tag: string
}>()
</script>

<template>
    <span class="shrink-0 mr-2 mb-3">
        <span class="py-1.5 px-2 bg-muted rounded-md text-[13px] font-semibold font-sans">
            {{ tag }}
        </span>
        &ZeroWidthSpace;
    </span>
</template>
