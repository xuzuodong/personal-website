<script setup lang="ts">
import type { GalleryListItem } from '~/server/api/galleries/index.get'

const props = defineProps<{
    item: GalleryListItem
}>()
</script>

<template>
    <nuxt-link :to="`/galleries/${item.slug}`">
        <div v-bind="$attrs" class="relative h-full">
            <div class="image-wrapper h-full">
                <sanity-image
                    :asset-id="item.coverImage.asset._id"
                    fit="crop" dpr="3" w="300" h="300"
                    :style="{ backgroundImage: `url(${item.coverImage.asset.metadata.lqip!})` }"
                    class="bg-cover h-full"
                />
            </div>
            <div class="z-[2] absolute bottom-0 w-full px-6 py-5 font-serif text-center text-xl font-bold">
                <h3 class="mb-2.5 text-white font-[Playfair Display]">{{ item.name[0].value }}</h3>
                <p class="mb-2.5 text-gray-300 text-sm font-[BenchNine]">- {{ item.imageCount }} PHOTOS -</p>
            </div>
        </div>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.image-wrapper:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 40%;
    bottom: -1px;
    left: 0;
    transition: height .5s;
    background: linear-gradient(0deg,#151515,hsla(0,0%,8%,0));
}
</style>
