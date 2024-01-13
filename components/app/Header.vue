<script setup lang="ts">
const navItems = [
    { name: 'Photography', path: '/photography' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
]
</script>

<template>
    <div class="dark:border-b dark:border-gray-300 dark:border-opacity-30 h-[60px] shadow-lg dark:shadow-none">
        <div class="hidden lg:flex h-full container justify-between items-center">
            <nuxt-link to="/">
                <nuxt-img src="/avatar.jpg" width="40" height="40" class="rounded-full" />
            </nuxt-link>

            <div class="flex items-center space-x-4">
                <nuxt-link
                    v-for="item in navItems"
                    :key="item.path"
                    :to="item.path"
                    class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    active-class="text-gray-900 dark:text-gray-100"
                    exact
                >
                    {{ item.name }}
                </nuxt-link>
            </div>

            <client-only>
                <base-switch-theme />
            </client-only>
        </div>

        <div class="px-4 h-full flex lg:hidden justify-between items-center">
            <nuxt-link to="/">
                <nuxt-img src="/avatar.jpg" width="32" height="32" class="rounded-full" />
            </nuxt-link>

            <app-header-burger />
        </div>
    </div>
</template>
