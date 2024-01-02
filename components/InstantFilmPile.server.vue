<script setup lang="ts">
import type { ResolvedSanityImage } from '@sanity/asset-utils'

const props = defineProps<{
    instantFilms: { image: ResolvedSanityImage, orientation: 'portrait' | 'landscape' }[]
}>()
</script>

<template>
    <div v-for="card in instantFilms" :key="card.image.asset._id" class="hidden">
        <sanity-image :asset-id="card.image.asset._id" :w="720" :h="720">
            <template #default="{ src }">
                <nuxt-img :src="src" preload />
            </template>
        </sanity-image>
    </div>
</template>
