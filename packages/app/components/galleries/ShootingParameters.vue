<script setup lang="ts">
const props = defineProps<{
    exif: any
}>()
</script>

<template>
    <div class="text-gray-400 text-sm mb-4">
        <div class="flex flex-wrap space-x-2">
            <span>{{ exif.FocalLengthIn35mmFormat }}mm</span>
            <span>ƒ{{ exif.FNumber }}</span>
            <span>{{ exif.ExposureTime < 1 ? decimalToFraction(exif.ExposureTime) : exif.ExposureTime }}s</span>
            <span>ISO {{ exif.ISO }}</span>
        </div>
    </div>
</template>
