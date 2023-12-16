<script setup lang="ts">
import { useMotions } from '@vueuse/motion'
import { promiseTimeout } from '@vueuse/core'

import type { Handler } from '@vueuse/gesture'
import type { ResolvedSanityImage } from '@sanity/asset-utils'
import type { Variant } from '@vueuse/motion'

const props = defineProps<{
    instantFilms: { image: ResolvedSanityImage, orientation: 'portrait' | 'landscape' }[]
}>()

const motions = useMotions()

function enterVariant(i: number): Variant {
    return { x: 0, y: 0, scale: 1, rotate: (Math.random() - 0.5) * 20, transition: { delay: i * 150, stiffness: 120, damping: 20 } }
}

const goneCards = reactive(new Set())

function moveCardOutOfScreen(i: number, movementX: number, vx: number) {
    const motionInstance = motions[`motion-${i}`]
    const x = (200 + window.innerWidth) * Math.sign(vx)
    const rotate = movementX / 100 + (10 * vx)
    motionInstance.apply({ x, rotate, transition: { stiffness: 120, damping: 20 } })
}

let draggingInfo: null | { i: number, movementX: number, vx: number, cancel: () => void } = null

/**
 The `@vueuse/gesture` package has an issue where the drag interaction remains unfinished
 if the user drags too quickly, causing the card to lag behind the pointer's movement,
 and releases the mouse before the interaction can catch up.
 To address this, we listen to the document's `pointerup` event to ensure the interaction is properly completed.
 */
onMounted(() => {
    useEventListener(document, 'pointerup', () => {
        if (draggingInfo) {
            const { i, movementX, vx, cancel } = draggingInfo
            goneCards.add(i)
            draggingInfo = null
            cancel()
            moveCardOutOfScreen(i, movementX, vx)
        }
    })
})

function handleDrag(i: number) {
    return function (dragState: Parameters<Handler<'drag'>>[0]) {
        const { movement, dragging, velocities: [vx], cancel } = dragState

        const motionInstance = motions[`motion-${i}`]
        if (!motionInstance) return

        const trigger = Math.abs(vx) > 0.2

        if (!dragging && trigger) {
            goneCards.add(i)
            draggingInfo = null
            moveCardOutOfScreen(i, movement[0], vx)
        }

        // move the card back to its original position
        else if (!dragging) {
            draggingInfo = null
            motionInstance.apply({ x: 0, y: 0, scale: 1, rotate: 0, transition: { stiffness: 120, damping: 15 } })
        }

        // keep the card moving with the pointer
        else {
            draggingInfo = { i, movementX: movement[0], vx, cancel }
            motionInstance.apply({ x: movement[0], scale: 1.1, rotate: 0, transition: { stiffness: 400, damping: 20 } })
        }
    }
}

whenever(() => goneCards.size === props.instantFilms.length, async () => {
    await promiseTimeout(600)
    Object.values(motions).forEach((motion, i) => motion.apply(enterVariant(i)))
    draggingInfo = null
    goneCards.clear()
})
</script>

<template>
    <client-only>
        <div v-for="(card, i) in instantFilms" :key="card.image.asset._id" class="film-container">
            <instant-film-frame
                v-motion="`motion-${i}`"
                v-drag="handleDrag(i)"
                :initial="{ scale: 1.5, y: -1000 }"
                :enter="enterVariant(i)"
                :class="goneCards.size === instantFilms.length - i - 1 ? 'pointer-events-auto' : 'pointer-events-none'"
            >
                <sanity-image
                    :asset-id="card.image.asset._id" :w="720" :h="720"
                    :class="[
                        card.orientation === 'landscape'
                            ? 'w-[256px] h-[192px] lg:w-[320px] lg:h-[240px]'
                            : 'w-[192px] h-[256px] lg:w-[240px] lg:h-[320px]',
                    ]"
                    class="object-cover pointer-events-none touch-none select-none"
                />
            </instant-film-frame>
        </div>
    </client-only>

    <!-- only for ssr optimization -->
    <div v-for="card in instantFilms" :key="card.image.asset._id" class="hidden">
        <sanity-image :asset-id="card.image.asset._id" :w="720" :h="720">
            <template #default="{ src }">
                <nuxt-img :src="src" preload />
            </template>
        </sanity-image>
    </div>
</template>

<style lang="scss" scoped>
.film-container {
    @apply absolute w-full h-full
        flex justify-center items-center
        pointer-events-none select-none touch-none
        will-change-transform;
}
</style>
