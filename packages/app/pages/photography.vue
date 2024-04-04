<script setup lang="ts">
import type { GalleryListItem } from '~/server/api/galleries/index.get'

const { t } = useI18n()

useHead({
    title: t('app.photography'),
})

const { data } = await useFetch<GalleryListItem[]>('/api/galleries')
</script>

<template>
    <div class="mt-12 px-4 max-w-[1200px] mx-auto">
        <h2 class="text-center text-2xl font-bold">{{ $t('photography.galleries') }}</h2>

        <div class="mt-8 flex flex-wrap justify-center lg:justify-normal gap-4">
            <div v-for="item in data" :key="item.id" class="cover aspect-square">
                <galleries-cover :item="item" />
            </div>
            <div v-for="i in 8" :key="i" class="cover"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cover {
    @apply flex-1 min-w-full xs:min-w-[250px] sm:min-w-[270px] xs:max-w-[330px];
}
</style>
