<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: t('app.about'),
})
</script>

<template>
    <div class="mt-12">
        <h2 class="text-center text-2xl font-bold mb-4">{{ $t('app.about') }}</h2>

        <p class="mx-auto max-w-[600px]">{{ $t('about.desc') }}</p>
    </div>
</template>
