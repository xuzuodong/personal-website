<script setup lang="ts">
const { t } = useI18n()

useHead({
    titleTemplate: title => title ? `${title} - ${t('app.title')}` : t('app.title'),
})
</script>

<template>
    <div class="min-h-full flex flex-col overflow-x-hidden">
        <app-header />
        <div class="flex-1">
            <slot></slot>
        </div>
        <app-footer />
    </div>
</template>
