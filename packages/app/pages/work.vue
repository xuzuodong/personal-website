<script setup lang="ts">
import type { Project } from '~/server/api/projects.get'

const { t } = useI18n()

useHead({
    title: t('app.work'),
})

const { data } = await useFetch<Project[]>('/api/projects')
</script>

<template>
    <app-section :title="$t('work.projects') " class="container mx-auto">
        <div class="divide-y divide-dashed">
            <div v-for="item in data" :key="item.id" class="flex space-x-4 p-4">
                <sanity-image :asset-id="item.coverImage.asset._id" w="250" h="180" fit="crop" class="rounded-lg" />

                <div class="flex-1 flex flex-col">
                    <h2 class="text-[1.1rem] font-medium mb-2">
                        {{ $sanityI18n(item.name) }}
                    </h2>

                    <p class="text-[0.9rem] text-muted-foreground leading-snug">
                        {{ $sanityI18n(item.description) }}
                    </p>

                    <div class="mt-4">
                        <span v-for="tag in item.tags" :key="tag">
                            <span class="py-1.5 px-2 bg-muted rounded-md text-[13px] font-semibold font-sans">
                                {{ tag }}
                            </span>
                            &ZeroWidthSpace;
                        </span>
                    </div>

                    <div class="flex-1"></div>
                    <div class="flex space-x-2">
                        <div class="flex-1"></div>
                        <ui-button v-if="item.url" variant="secondary">
                            <a :href="item.url" target="_blank">Visit<icon name="iconamoon:link-external-light" class="ml-1" /></a>
                        </ui-button>
                        <!-- <ui-button variant="default">Learn More</ui-button> -->
                    </div>
                </div>
            </div>
        </div>
    </app-section>
</template>
