<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

import type { Gallery } from '~/server/api/galleries/[slug].get'

const route = useRoute()

const { data } = await useFetch<Gallery | null>(`/api/galleries/` + `${route.params.slug}`)

let lightbox: any

const img = useImage()

onMounted(() => {
    lightbox = new PhotoSwipeLightbox({
        gallery: '#photoswipe',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        loop: false,
        imageClickAction: 'zoom',
        tapAction: 'close',
        doubleTapAction: 'zoom',
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 1,
    })
    lightbox.init()
})

onUnmounted(() => {
    lightbox?.destroy()
    lightbox = null
})
</script>

<template>
    <div v-if="data" class="mt-12">
        <h3 class="text-center text-2xl font-bold">{{ data.name[0].value }}</h3>

        <p class="pt-6 pb-4 text-muted-foreground px-4 md:px-16 2xl:px-20">{{ data.description[0].value }}</p>

        <div id="photoswipe" class="mt-6 pb-12 flex flex-wrap justify-center gap-2">
            <figure v-for="item in data.images" :key="item.asset._id" class="item relative block">
                <a
                    :href="img(item.asset._id, {}, { provider: 'mySanity' })"
                    :data-pswp-width="item.asset.metadata.dimensions.width"
                    :data-pswp-height="item.asset.metadata.dimensions.height"
                    data-cropped="true"
                    target="_blank"
                    class="block relative w-full h-full pb-[100%] overflow-hidden"
                >
                    <img
                        :src="img(
                            item.asset._id,
                            { height: 1024, width: 1024 },
                            { provider: 'mySanity', densities: 'x1 x2' },
                        )"
                        class="bg-cover w-full h-full object-cover absolute top-0 left-0"
                        :style="{ backgroundImage: `url(${item.asset.metadata.lqip!})` }"
                    />
                </a>
            </figure>
            <div v-for="i in 8" :key="i" class="item"></div>
        </div>
    </div>
    <div v-else>Cannot find gallery</div>
</template>

<style lang="scss" scoped>
.item {
    @apply flex-1 min-w-[44%] sm:min-w-[28%] md:min-w-[23%] max-w-[340px];
}
</style>
