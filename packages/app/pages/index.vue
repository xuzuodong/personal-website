<script setup lang="ts">
import type { ResolvedSanityImage } from '@sanity/asset-utils'

const query = groq`
*[_id == "instantFilms"].instantFilms[]{
    ...,
    asset->
}
`

const { data } = await useSanityQuery<ResolvedSanityImage[]>(query)

const instantFilms = computed(() => data.value?.map(image => ({
    image,
    orientation: image?.asset.metadata.dimensions.aspectRatio > 1
        ? 'landscape' as const
        : 'portrait' as const,
})))
</script>

<template>
    <div
        class="
            min-h-[calc(max(540px,60%))]
            flex flex-col-reverse lg:flex-row lg:space-x-4 xl:space-x-12
            [&>*]:w-full
        "
    >
        <div class="flex flex-col justify-center lg:basis-1/2 xl:basis-3/5">
            <div class="hidden lg:flex items-center space-x-1">
                <icon name="tdesign:location" />
                <p>Hangzhou, China</p>
            </div>

            <div class="h-3/5 flex flex-col justify-center space-y-6 lg:space-y-10">
                <h1>
                    Scripting realities in bytes, <br />
                    Painting tales with light.
                </h1>

                <p class="xs:text-sm sm:text-base text-center lg:text-left lg:text-lg xl:text-xl lg:leading-snug">
                    I'm a front-end engineer and photographer who loves creating captivating websites and capturing beautiful moments.
                    Explore my creations on this website and enjoy!
                </p>

                <div>
                    <ui-button>Explore More</ui-button>
                </div>
            </div>
        </div>

        <div class="self-center lg:basis-1/2 xl:basis-2/5 min-h-[500px] relative">
            <instant-film-pile v-if="instantFilms" :instant-films="instantFilms" />
        </div>
    </div>
</template>
