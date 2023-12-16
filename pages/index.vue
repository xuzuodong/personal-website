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
    <div
        class="
          min-h-[540px] container mx-auto
          flex flex-col-reverse lg:flex-row
          [&>*]:w-full lg:[&>*]:basis-1/2 h-3/5 items-center
        "
    >
        <div class="h-full px-4 flex flex-col justify-around">
            <div class="flex items-center space-x-1">
                <icon name="tdesign:location" />
                <p>Hangzhou, China</p>
            </div>

            <h1 class="text-center lg:text-justify text-lg lg:text-3xl font-semibold">
                Scripting realities in bytes, <br />
                Painting tales with light.
            </h1>

            <p class="text-sm lg:text-base leading-snug">
                I'm a front-end engineer and photographer who loves creating captivating websites and capturing beautiful moments. Explore my creations on this website and enjoy!
            </p>
        </div>

        <div>
            <client-only v-if="instantFilms">
                <instant-film-pile :instant-films="instantFilms" />
            </client-only>
        </div>
    </div>
</template>
