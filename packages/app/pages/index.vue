<script setup lang="ts">
const localePath = useLocalePath()

const { data } = await useFetch('/api/instant-films')

// TODO: directly pass `data` to <instant-film-pile />
const instantFilms = computed(() => data.value?.map(image => ({
    image,
    orientation: image.asset!.metadata!.dimensions!.aspectRatio! > 1
        ? 'landscape' as const
        : 'portrait' as const,
})))
</script>

<template>
    <div class="h-[max(600px,calc(100vh-var(--header-height)-var(--footer-height)))] flex items-center">
        <div
            class="
                container [&>*]:w-full h-[calc(min(100%,750px))]
                flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-4 xl:space-x-12
            "
        >
            <div class="flex flex-col justify-center lg:basis-1/2 xl:basis-3/5">
                <div class="hidden lg:flex items-center space-x-1">
                    <icon name="tdesign:location" />
                    <p>{{ $t('home.location') }}</p>
                </div>

                <div class="h-3/5 flex flex-col justify-center space-y-6 lg:space-y-10">
                    <h1 class="headline">{{ $t('home.headline') }}</h1>

                    <p class="text-muted-foreground xs:text-sm sm:text-base text-center lg:text-left lg:text-lg xl:text-xl lg:leading-snug">
                        {{ $t('home.subhead') }}
                    </p>

                    <div class="self-center lg:self-start pb-8">
                        <ui-button :to="localePath('/photography')">{{ $t('home.explore-more') }}</ui-button>
                    </div>
                </div>
            </div>

            <div class="self-center lg:basis-1/2 xl:basis-2/5 h-full relative">
                <instant-film-pile v-if="instantFilms" :instant-films="instantFilms" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.headline {
    @apply text-center lg:text-left font-semibold whitespace-pre
        text-2xl sm:text-[2rem] md:text-[2.25rem] xl:text-[2.5rem] 2xl:text-[2.75rem] lg:leading-tight xl:leading-[1.3] 2xl:leading-[1.2];
}
</style>
