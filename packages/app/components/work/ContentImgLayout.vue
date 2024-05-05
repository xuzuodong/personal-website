<script setup lang="ts">
export interface Link {
    type: 'url' | 'sourceCodeUrl'
    url: string
}
const props = defineProps<{
    link?: Link
}>()

const fixedClasses = 'max-w-[540px] xl:max-w-[720px] mx-auto'
</script>

<template>
    <a v-if="link" class="link block" :class="[fixedClasses, link.type && 'relative']" :href="link.url" target="_blank">
        <slot></slot>
        <div
            class="
                bottom-shadow pb-3 pt-12 pr-6 text-white
                absolute bottom-0 w-full
                flex justify-end items-center
            "
        >
            <span class="pr-1">{{ link.type === 'url' ? $t('work.visit') : $t('work.view-source-code') }}</span>
            <icon name="iconamoon:link-external-light" />
        </div>
    </a>

    <div v-else :class="fixedClasses">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.link {
    &:hover span {
        text-decoration: underline;
    }
    .bottom-shadow {
        background: linear-gradient(0deg,hsl(223, 28%, 5%),hsla(0,0%,8%,0));
    }
}
</style>
