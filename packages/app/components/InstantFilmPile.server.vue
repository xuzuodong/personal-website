<script setup lang="ts">
import type { InstantFilmsQueryResult } from '~/types/sanity'

const props = defineProps<{
    instantFilms: { image: NonNullable<InstantFilmsQueryResult>[number], orientation: 'portrait' | 'landscape' }[]
}>()
</script>

<template>
    <div v-for="card in instantFilms" :key="card.image.asset!._id" class="hidden">
        <my-sanity-image :src="card.image.asset!._id" preload :width="1440" :height="1440" />
    </div>
</template>
