<script setup lang="ts">
import type { ResolvedSanityImage } from '@sanity/asset-utils'

const props = defineProps<{
    instantFilms: { image: ResolvedSanityImage, orientation: 'portrait' | 'landscape' }[]
}>()
</script>

<template>
    <div v-for="card in instantFilms" :key="card.image.asset._id" class="hidden">
        <nuxt-img provider="mySanity" :src="card.image.asset._id" preload :width="720" :height="720" />
    </div>
</template>
