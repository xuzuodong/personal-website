<script setup lang="ts">
import type { Project } from '~~/server/api/projects/index.get'

const { t } = useI18n()

useHead({
    title: t('app.work'),
})

const { data } = await useFetch<Project[]>('/api/projects')

const localePath = useLocalePath()
</script>

<template>
    <app-layout :title="$t('work.projects') " class="container mx-auto">
        <div class="divide-y divide-dashed">
            <div v-for="item in data" :key="item.id" class="flex flex-col md:flex-row space-x-4 p-4">
                <div class="mb-6 md:mb-0 w-4/5 md:w-[200px] xl:w-[240px] self-center md:self-auto">
                    <ui-aspect-ratio :ratio="16 / 10">
                        <my-sanity-image
                            :src="item.coverImage.asset._id"
                            fit="cover" height="330px"
                            :placeholder="item.coverImage.asset.metadata.lqip!"
                            class="bg-cover h-full w-full rounded object-cover"
                        />
                    </ui-aspect-ratio>
                </div>

                <div class="flex-1 flex flex-col">
                    <h2 class="text-[1.1rem] xl:text-xl font-medium mb-2">
                        {{ $sanityI18n(item.name) }}
                    </h2>

                    <p class="text-[0.9rem] xl:text-base text-muted-foreground leading-snug">
                        {{ $sanityI18n(item.description) }}
                    </p>

                    <div class="mt-4 flex flex-wrap">
                        <work-tag v-for="tag in item.tags" :key="tag" :tag />
                    </div>

                    <div class="flex-1"></div>
                    <div class="flex space-x-2 pt-4 justify-center sm:justify-end">
                        <ui-button v-if="item.url" variant="secondary">
                            <a :href="item.url" target="_blank">{{ $t('work.visit') }}<icon name="iconamoon:link-external-light" class="ml-1" /></a>
                        </ui-button>
                        <ui-button v-if="item.sourceCodeUrl" variant="secondary">
                            <a :href="item.sourceCodeUrl" target="_blank">{{ $t('work.source-code') }}<icon name="iconamoon:link-external-light" class="ml-1" /></a>
                        </ui-button>
                        <ui-button variant="default">
                            <nuxt-link :to="localePath(`/work/${item.slug}`)">{{ $t('work.learn-more') }}</nuxt-link>
                        </ui-button>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
