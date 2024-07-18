<script setup lang="ts">
const props = defineProps<{
    exif?: Record<string, any>
    image?: Record<string, any>
}>()

function getBrand(str: string) {
    const map = {
        'NIKON': 'nikon',
        'NIKON CORPORATION': 'nikon',
        'Apple': 'apple',
        'FUJIFILM': 'fujifilm',
    }
    return map[str as keyof typeof map]
}

// function show35MmEquivalentFocalLength(focalLength: number, focalLengthIn35mmFormat: number) {
//     const cropFactor = focalLengthIn35mmFormat / focalLength
//     return Math.abs(cropFactor - 1) > 0.2
// }
</script>

<template>
    <div class="flex flex-nowrap justify-between items-center sm:mb-4 text-white">
        <div>
            <p class="font-[500]">{{ image?.Model }}</p>
            <p class="text-sm opacity-75">{{ exif?.LensModel }}</p>
        </div>
        <div class="min-w-10"></div>
        <div class="flex items-center text-[15px]">
            <photography-photo-caption-logo :brand="getBrand(image?.Make || exif?.LensMake)" />
            <div class="w-px self-stretch bg-white mx-4"></div>
            <div>
                <div class="flex space-x-2 pb-px">
                    <p v-if="exif?.FocalLengthIn35mmFormat" class="whitespace-nowrap">
                        {{ exif.FocalLengthIn35mmFormat }}mm
                        <!-- <span v-if="exif?.FocalLength && show35MmEquivalentFocalLength(exif?.FocalLength, exif?.FocalLengthIn35mmFormat)">
                            ({{ (exif.FocalLength as number).toFixed(0) }}mm)
                        </span> -->
                    </p>
                    <p class="whitespace-nowrap">ƒ{{ exif?.FNumber }}</p>
                    <span class="whitespace-nowrap">{{ exif?.ExposureTime < 1 ? decimalToFraction(exif?.ExposureTime) : exif?.ExposureTime }}s</span>
                    <span class="whitespace-nowrap">ISO {{ exif?.ISO }}</span>
                </div>
                <div class="flex text-sm opacity-50">
                    <p>Photo by Ted Xu</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.pswp__dynamic-caption--below {
    max-width: none !important;
}
</style>
