<script setup lang="ts">
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Photography', path: '/photography' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
]

const isMobileMenuOpen = ref(false)

const colorMode = useColorMode()
const motions = useMotions()

const menuBackdropBgColorLight = 'rgba(255, 255, 255, 0.5)'
const menuBackdropBgColorDark = 'rgba(0, 0, 0, 0.5)'

watch(() => colorMode.value, (value) => {
    if (!isMobileMenuOpen.value) return
    motions.menu.set({
        backgroundColor: value === 'dark' ? menuBackdropBgColorDark : menuBackdropBgColorLight,
    })
})
</script>

<template>
    <div
        class="dark:border-b shadow-lg dark:shadow-none h-[60px]"
    >
        <div class="hidden lg:flex h-full container justify-between items-center">
            <nuxt-link to="/">
                <nuxt-img src="/avatar.jpg" width="40" height="40" class="rounded-full" />
            </nuxt-link>

            <div class="flex items-center space-x-4">
                <ui-navigation-menu>
                    <ui-navigation-menu-list>
                        <ui-navigation-menu-item
                            v-for="item in navItems"
                            :key="item.path"
                        >
                            <ui-navigation-menu-link as-child>
                                <nuxt-link
                                    :to="item.path"
                                    class="text-muted-foreground"
                                    exact-active-class="text-primary"
                                >
                                    <ui-button variant="ghost">{{ item.name }}</ui-button>
                                </nuxt-link>
                            </ui-navigation-menu-link>
                        </ui-navigation-menu-item>
                    </ui-navigation-menu-list>
                </ui-navigation-menu>
            </div>

            <app-switch-theme />
        </div>

        <div class="px-4 h-full flex lg:hidden justify-between items-center">
            <nuxt-link to="/" class="z-20" @click="isMobileMenuOpen && (isMobileMenuOpen = false)">
                <nuxt-img src="/avatar.jpg" width="32" height="32" class="rounded-full" />
            </nuxt-link>

            <app-header-burger v-model="isMobileMenuOpen" class="z-20" />
        </div>
    </div>

    <div
        v-if="isMobileMenuOpen"
        v-motion="'menu'"
        :initial="{
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
            backgroundColor: $colorMode.value === 'dark' ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)',
        }"
        :enter="{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: $colorMode.value === 'dark' ? menuBackdropBgColorDark : menuBackdropBgColorLight,
            transition: { duration: 300 },
        }"
        class="lg:hidden absolute z-10 left-0 w-full h-full overflow-hidden"
        @click="isMobileMenuOpen = false"
    >
        <div class="h-full flex flex-col justify-center items-center ">
            <div
                class="
                    w-full px-12 flex flex-col text-center
                    divide-y divide-gray-700 divide-opacity-30 dark:divide-gray-400 dark:divide-opacity-30
                "
            >
                <nuxt-link
                    v-for="item in navItems"
                    :key="item.path"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 500 } }"
                    :to="item.path"
                    class="text-gray-7 dark:text-white h-12 leading-[3rem]" exact
                >
                    {{ item.name }}
                </nuxt-link>
            </div>

            <div class="pt-8">
                <app-switch-theme @click.stop />
            </div>
        </div>
    </div>
</template>
