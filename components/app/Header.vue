<script setup lang="ts">

</script>

<template>
    <div class="dark:border-b dark:border-gray-300 dark:border-opacity-30 h-[60px] shadow-lg dark:shadow-none">
        <div class="h-full container mx-auto px-6 flex justify-between items-center">
            <nuxt-link to="/">
                <nuxt-img src="/avatar.jpg" width="40" height="40" class="rounded-full" />
            </nuxt-link>

            <client-only>
                <base-switch-theme />
            </client-only>
        </div>
    </div>
</template>
