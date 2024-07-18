<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: t('app.about'),
})
</script>

<template>
    <div class="container">
        <app-layout :title="$t('app.about')">
            <p>{{ $t('about.desc') }}</p>
        </app-layout>
    </div>
</template>
