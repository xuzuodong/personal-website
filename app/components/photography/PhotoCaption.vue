<script setup lang="ts">
const props = defineProps<{
    exif: any
}>()
</script>

<template>
    <div class="flex flex-nowrap items-center space-x-4 mb-4">
        <photography-photo-caption-logo :lens-make="exif.LensMake" />
        <div>
            <p class="font-semibold font-gray-200">{{ exif.LensModel }}</p>
            <div class="text-gray-400 text-sm">
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
        </div>
    </div>
</template>
