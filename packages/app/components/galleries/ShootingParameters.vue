<script setup lang="ts">
const props = defineProps<{
    exif: any
}>()
</script>

<template>
    <div class="text-gray-400 text-sm mb-4">
        <div class="flex flex-nowrap space-x-2 text-nowrap">
            <span>{{ exif.FocalLengthIn35mmFormat }}mm
                <span v-if="exif.FocalLength !== exif.FocalLengthIn35mmFormat">
                    ({{ exif.FocalLength }}mm)
                </span>
            </span>
            <span>ƒ{{ exif.FNumber }}</span>
            <span>{{ exif.ExposureTime < 1 ? decimalToFraction(exif.ExposureTime) : exif.ExposureTime }}s</span>
            <span>ISO {{ exif.ISO }}</span>
        </div>
    </div>
</template>
