<script setup lang="ts">
import type { GalleryListItem } from '~/server/api/galleries/index.get'

const { t } = useI18n()

useHead({
    title: t('app.photography'),
})

const { data } = await useFetch<GalleryListItem[]>('/api/galleries')
</script>

<template>
    <div class="mt-12">
        <h2 class="text-center text-2xl font-bold">{{ $t('photography.galleries') }}</h2>

        <div class="mt-8 flex flex-wrap justify-center lg:justify-normal gap-4">
            <div v-for="item in data" :key="item.id" class="item aspect-square">
                <galleries-cover-image :item="item" />
            </div>
            <div v-for="i in 8" :key="i" class="item"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    @apply flex-1 min-w-[270px] max-w-[330px];
}
</style>
