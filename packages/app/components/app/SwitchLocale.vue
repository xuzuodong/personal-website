<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
    <client-only>
        <ui-dropdown-menu>
            <ui-dropdown-menu-trigger as-child @click.stop>
                <ui-button variant="ghost" size="icon">
                    <icon name="ion:language" size="20" />
                </ui-button>
            </ui-dropdown-menu-trigger>
            <ui-dropdown-menu-content class="w-[48px]">
                <nuxt-link v-for="l in locales" :key="l.code" :to="switchLocalePath(l.code)">
                    <ui-dropdown-menu-item
                        class="leading-[32px]"
                        :class="locale === l.code ? 'font-bold' : 'text-muted-foreground'"
                    >
                        {{ l.name }}
                    </ui-dropdown-menu-item>
                </nuxt-link>
            </ui-dropdown-menu-content>
        </ui-dropdown-menu>
    </client-only>
</template>
