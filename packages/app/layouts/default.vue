<script setup lang="ts">
const { t } = useI18n()

useHead({
    titleTemplate: title => title ? `${title} - ${t('app.title')}` : t('app.title'),
})
</script>

<template>
    <div class="min-h-full flex flex-col">
        <app-header />
        <div class="container flex-1">
            <slot></slot>
        </div>
        <app-footer />
    </div>
</template>
