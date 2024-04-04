<script setup lang="ts">
const { t } = useI18n()

useHead({
    title: t('app.about'),
})
</script>

<template>
    <div class="container">
        <app-section :title="$t('app.about')">
            <p>{{ $t('about.desc') }}</p>
        </app-section>
    </div>
</template>
