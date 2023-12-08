<script setup lang="ts">
import type { ResolvedSanityImage } from '@sanity/asset-utils'

const query = groq`
*[_type == "deckPhotos"]{
  images[]{
    ...,
    asset->
  }
}`

const { data } = useSanityQuery<{
    images: ResolvedSanityImage[]
}[]>(query)

const instantFilms = computed(() => data.value?.[0].images.map(image => ({
    image,
    orientation: image.asset.metadata.dimensions.aspectRatio > 1
        ? 'landscape' as const
        : 'portrait' as const,
})))
</script>

<template>
    <client-only>
        <instant-film-pile :instant-films="instantFilms" />
    </client-only>
</template>
