<script setup lang="ts">
import type { Gallery } from '~/server/api/galleries/[slug].get'

definePageMeta({
    scrollToTop: true,
})

const route = useRoute()

const { data } = await useFetch<Gallery | null>(`/api/galleries/` + `${route.params.slug}`)

const { t } = useI18n()
const { $sanityI18n } = useNuxtApp()

useHead({
    title: $sanityI18n(data.value?.name),
    titleTemplate: title => title
        ? `${title} - ${t('app.title')}${t('photography.titleAffix')}`
        : `${t('app.title')}${t('photography.titleAffix')}`,
})

const img = useImage()

const { photoSwipeEl } = usePhotoSwipe()
</script>

<template>
    <app-layout v-if="data" level="2" :title="$sanityI18n(data.name)">
        <div class="pb-6 text-center text-sm text-muted-foreground flex justify-center space-x-2">
            <p class="metadata-item">
                <icon name="solar:album-linear" />
                <span>{{ $t('photography.count', { count: data.images.length }) }}</span>
            </p>

            <template v-if="data.photographDate">
                <span>·</span>
                <p class="metadata-item">
                    <icon name="material-symbols:calendar-today-outline" />
                    <span>{{ $t('photography.photographDate', { createDate: $d(new Date(data.photographDate), 'short') }) }}</span>
                </p>
            </template>
        </div>

        <p class="container pb-4">{{ $sanityI18n(data.description) }}</p>

        <div
            ref="photoSwipeEl"
            class="
                container mt-6 pb-12 gap-2
                grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
            "
        >
            <figure v-for="item in data.images" :key="item.asset._id" class="photo relative block">
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
                            { provider: 'mySanity' },
                        )"
                        class="bg-cover w-full h-full object-cover absolute top-0 left-0"
                        :style="{ backgroundImage: `url(${item.asset.metadata.lqip!})` }"
                    />
                    <div v-if="item.asset.metadata.exif" class="pswp-caption-content">
                        <photography-photo-caption :exif="item.asset.metadata.exif" />
                    </div>
                </a>
            </figure>
        </div>
    </app-layout>
    <div v-else>Cannot find gallery</div>
</template>

<style lang="scss" scoped>
.metadata-item {
    @apply flex justify-center items-center space-x-1;
}
</style>
