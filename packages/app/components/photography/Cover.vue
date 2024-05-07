<script setup lang="ts">
import type { GalleriesQueryResult } from '~/types/sanity'

const props = defineProps<{
    item: NonNullable<GalleriesQueryResult>[number]
}>()

const localePath = useLocalePath()
</script>

<template>
    <nuxt-link :to="localePath(`/galleries/${item.slug}`)">
        <div
            v-bind="$attrs"
            class="cover relative h-full"
        >
            <div class="image-wrapper h-full">
                <my-sanity-image
                    :src="item.coverImage?.asset?._id"
                    fit="cover" width="330px" height="330px"
                    :placeholder="item.coverImage?.asset?.metadata?.lqip"
                    class="bg-cover h-full w-full"
                />
            </div>
            <div class="z-[2] absolute bottom-0 w-full px-6 py-5 text-center text-xl">
                <h3 class="mb-2.5 text-white font-['Playfair_Display',_'Noto_Serif_SC']">{{ $sanityI18n(item.name) }}</h3>
                <p class="text-[#a1a1a1] text-sm font-['BenchNine'] tracking-widest">- {{ item.imageCount }} PHOTOS -</p>
            </div>
        </div>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.cover {
    &::before, &::after {
        content: "";
        position: absolute;
        height: 5px;
        transition: opacity .3s, height .3s, top .3s;
        background: hsl(var(--foreground));
    }

    &::before {
        width: calc(100% - 20px);
        opacity: .1;
        left: 10px;
        top: -5px;
    }

    &:hover::before {
        opacity: .2;
        height: 7px;
        top: -7px;
    }

    &::after {
        width: calc(100% - 40px);
        opacity: .05;
        left: 20px;
        top: -10px;
    }

    &:hover::after {
        opacity: .1;
        height: 7px;
        top: -14px;
    }

    .image-wrapper {
        &::after {
            content: "";
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 40%;
            bottom: -1px;
            left: 0;
            transition: height .3s;
            background: linear-gradient(0deg,hsl(224,71.4%,4.1%),hsla(0,0%,8%,0));
        }
    }

    &:hover {
        .image-wrapper::after {
            height: 30%;
        }
    }
}
</style>
