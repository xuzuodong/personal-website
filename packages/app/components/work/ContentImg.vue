<script setup lang="ts">
import type { ResolvedSanityImage } from '@sanity/asset-utils'

const props = defineProps<{
    img: ResolvedSanityImage
}>()
</script>

<template>
    <div class="max-w-[540px] xl:max-w-[720px] mx-auto">
        <ui-aspect-ratio :ratio="img.asset.metadata.dimensions.aspectRatio">
            <my-sanity-image
                :src="img.asset._id"
                width="720"
                class="h-full mb-4 drop-shadow-2xl bg-cover"
                :style="{ backgroundImage: `url(${img.asset.metadata.lqip!})` }"
            />
        </ui-aspect-ratio>
    </div>
</template>
