<script setup lang="ts">
import { PortableText } from '@portabletext/vue'

import type { PortableTextComponentProps, PortableTextVueComponents } from '@portabletext/vue'
import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { ProjectDetail } from '~/server/api/projects/[slug].get'

const route = useRoute()
const { data } = await useFetch<ProjectDetail>(`/api/projects/${route.params.slug}`)

const { $sanityI18n } = useNuxtApp()
const { t } = useI18n()

useHead({
    title: $sanityI18n(data.value?.name),
    titleTemplate: title => title
        ? `${title} - ${t('app.title')}${t('work.titleAffix')}`
        : `${t('app.title')}${t('work.titleAffix')}`,
})

const myPortableTextComponents: Partial<PortableTextVueComponents> = {
    types: {
        image: ({ value }: PortableTextComponentProps<ResolvedSanityImage>) => h(
            'img',
            { src: value.asset.url },
        ),
    },
}
</script>

<template>
    <app-section v-if="data" variant="chapter" :title="$sanityI18n(data.name)">
        <div class="px-4 lg:px-10 pt-3">
            <div class="pb-5 flex flex-wrap justify-center">
                <work-tag v-for="tag in data.tags" :key="tag" :tag />
            </div>
            <div class="flex container mb-5">
                <div class="w-1 shrink-0 bg-muted-foreground"></div>
                <p class="flex-1 px-6 py-4 bg-muted text-muted-foreground">
                    {{ $sanityI18n(data.description) }}
                </p>
            </div>
            <div class="container">
                <portable-text :value="$sanityI18n(data.content)" :components="myPortableTextComponents" />
            </div>
        </div>
    </app-section>
    <div v-else>Cannot find project</div>
</template>
