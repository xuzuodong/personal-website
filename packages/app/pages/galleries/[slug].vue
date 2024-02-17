<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import imageUrlBuilder from '@sanity/image-url'

import 'photoswipe/style.css'
import type { SanityClientLike } from '@sanity/image-url/lib/types/types'
import type { Gallery } from '~/server/api/galleries/[slug].get'
import type { SanityImageSource } from '@sanity/asset-utils'

const route = useRoute()

const { data } = await useFetch<Gallery | null>(`/api/galleries/` + `${route.params.slug}`)

let lightbox: any

const builder = imageUrlBuilder(useSanity().config as unknown as SanityClientLike)
function urlFor(source: SanityImageSource) {
    return builder.image(source).auto('format')
}

onMounted(() => {
    lightbox = new PhotoSwipeLightbox({
        gallery: '#photoswipe',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        loop: false,
        tapAction: 'close',
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 'fit',
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

        <div id="photoswipe" class="mt-6 pb-12 flex flex-wrap justify-center gap-4">
            <sanity-image
                v-for="item in data.images" :key="item.asset._id"
                :asset-id="item.asset._id" w="340" :dpr="3"
            >
                <template #default="{ src }">
                    <figure class="item relative">
                        <a
                            :href="urlFor(item.asset).url()"
                            :data-pswp-width="item.asset.metadata.dimensions.width"
                            :data-pswp-height="item.asset.metadata.dimensions.height"
                            data-cropped="true"
                            target="_blank"
                            class="block relative w-full h-full pb-[100%] overflow-hidden" :style="{ backgroundImage: `url(${item.asset.metadata.lqip!})` }"
                        >
                            <img
                                :src="`${src}`"
                                class="bg-cover w-full h-full object-cover absolute top-0 left-0"
                            />
                        </a>
                    </figure>
                </template>
            </sanity-image>
            <div v-for="i in 8" :key="i" class="item"></div>
        </div>
    </div>
    <div v-else>Cannot find gallery</div>
</template>

<style lang="scss" scoped>
.item {
    @apply flex-1 min-w-[195px] sm:min-w-[270px] max-w-[340px];
}
</style>
