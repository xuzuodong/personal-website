<script setup lang="ts">
import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Link } from './ContentImgLayout.vue'

const props = defineProps<{
    img: ResolvedSanityImage
    url?: string
    sourceCodeUrl?: string
}>()

const link = computed<Link | undefined>(
    () => props.url
        ? { type: 'url', url: props.url }
        : props.sourceCodeUrl
            ? { type: 'sourceCodeUrl', url: props.sourceCodeUrl }
            : undefined,
)
</script>

<template>
    <work-content-img-layout :link>
        <ui-aspect-ratio :ratio="img.asset.metadata.dimensions.aspectRatio">
            <my-sanity-image
                v-bind="$attrs"
                :src="img.asset._id"
                width="720" quality="95"
                class="h-full" :class="[
                    !img.asset.metadata.hasAlpha && 'bg-cover drop-shadow-2xl',
                ]"
                :style="{ backgroundImage: !img.asset.metadata.hasAlpha && `url(${img.asset.metadata.lqip!})` }"
            />
        </ui-aspect-ratio>
    </work-content-img-layout>
</template>

<style lang="scss" scoped>
.bottom-shadow {
    background: linear-gradient(0deg,hsl(223, 28%, 5%),hsla(0,0%,8%,0));
}
</style>
