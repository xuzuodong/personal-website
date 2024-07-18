<script setup lang="ts">
import { PortableText } from '@portabletext/vue'

import WorkContentImg from '~/components/work/ContentImg.vue'

import type { ProjectDetail } from '~~/server/api/projects/[slug].get'

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
</script>

<template>
    <app-layout v-if="data" level="2" :title="$sanityI18n(data.name)">
        <div class="max-w-[720px] xl:max-w-[840px] 2xl:max-w-[1024px] mx-auto px-4 lg:px-10 pt-3">
            <div class="pb-5 flex flex-wrap justify-center">
                <work-tag v-for="tag in data.tags" :key="tag" :tag />
            </div>

            <work-content-img :img="data.coverImage" :url="data.url" :referer="data.referer" :source-code-url="data.sourceCodeUrl" class="mb-8" />

            <portable-text :value="$sanityI18n(data.content)" :components="myPortableTextComponents" />

            <div class="pb-8"></div>
        </div>
    </app-layout>
    <div v-else>Cannot find project</div>
</template>
