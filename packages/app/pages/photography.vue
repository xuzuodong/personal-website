<script setup lang="ts">
import type { GalleryListItem } from '~/server/api/galleries/index.get'

const { t } = useI18n()

useHead({
    title: t('app.photography'),
})

const { data } = await useFetch<GalleryListItem[]>('/api/galleries')
</script>

<template>
    <div>
        <app-section :title="$t('photography.galleries') " class="px-4 lg:px-24 2xl:px-0 max-w-[1200px] mx-auto">
            <div class="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-6">
                <div v-for="item in data" :key="item.id" class="cover aspect-square">
                    <galleries-cover :item="item" />
                </div>
            </div>
        </app-section>
    </div>
</template>
