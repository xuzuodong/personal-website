<script setup lang="ts">
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
</script>

<template>
    <app-section v-if="data" variant="chapter" :title="$sanityI18n(data.name)">
        <div class="mb-4 px-4 lg:px-10 pt-6">
            <div class="flex container">
                <div class="w-1 shrink-0 bg-muted-foreground"></div>
                <p class="flex-1 px-6 py-4 bg-muted text-muted-foreground">{{ $sanityI18n(data.description) }}</p>
            </div>
        </div>
    </app-section>
    <div v-else>Cannot find project</div>
</template>
