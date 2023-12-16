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
    <div class="overflow-x-hidden">
        <div
            class="
                min-h-[calc(max(540px,60%))] container mx-auto
                flex flex-col-reverse lg:flex-row
                [&>*]:w-full
            "
        >
            <div class="px-4 lg:px-6 xl:px-8 flex flex-col justify-center lg:basis-1/2 xl:basis-3/5">
                <div class="hidden lg:flex items-center space-x-1">
                    <icon name="tdesign:location" />
                    <p>Hangzhou, China</p>
                </div>

                <div class="h-3/5 flex flex-col justify-center space-y-6">
                    <h1 class="text-center lg:text-left text-2xl lg:text-4xl xl:text-5xl lg:leading-tight xl:leading-[1.3] font-semibold">
                        Scripting realities in bytes, <br />
                        Painting tales with light.
                    </h1>

                    <p class="text-sm text-center lg:text-left lg:text-base lg:leading-snug">
                        I'm a front-end engineer and photographer who loves creating captivating websites and capturing beautiful moments. Explore my creations on this website and enjoy!
                    </p>
                </div>
            </div>

            <div class="self-center lg:basis-1/2 xl:basis-2/5">
                <client-only v-if="instantFilms">
                    <instant-film-pile :instant-films="instantFilms" />
                </client-only>
            </div>
        </div>
    </div>
</template>
