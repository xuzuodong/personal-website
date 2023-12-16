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

function moveCardBack(i: number) {
    const motionInstance = motions[`motion-${i}`]
    motionInstance.apply({ x: 0, y: 0, scale: 1, transition: { stiffness: 120, damping: 15 } })
}

function moveCardWithCursor(i: number, movementX: number) {
    const motionInstance = motions[`motion-${i}`]
    motionInstance.apply({ x: movementX, scale: 1.1, rotate: 0, transition: { stiffness: 400, damping: 20 } })
}

let draggingInfo: null | { i: number, movementX: number, vx: number, cancel: () => void } = null

useEventListener(document, 'pointerup', () => {
    if (draggingInfo) {
        const { i, movementX, vx, cancel } = draggingInfo
        goneCards.add(i)
        draggingInfo = null
        cancel()
        moveCardOutOfScreen(i, movementX, vx)
    }
})

function handleDrag(i: number) {
    return function (state: Parameters<Handler<'drag'>>[0]) {
        const { movement, dragging, velocities: [vx], cancel } = state
        const motionInstance = motions[`motion-${i}`]
        if (!motionInstance) return

        const trigger = Math.abs(vx) > 0.2

        if (!dragging && trigger) {
            goneCards.add(i)
            draggingInfo = null
            moveCardOutOfScreen(i, movement[0], vx)
        }

        else if (!dragging) {
            draggingInfo = null
            moveCardBack(i)
        }

        else {
            draggingInfo = { i, movementX: movement[0], vx, cancel }
            moveCardWithCursor(i, movement[0])
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
    <div class="relative h-[500px]">
        <div
            v-for="(card, i) in instantFilms" :key="card.image.asset._id"
            class="instant-film-container"
        >
            <div
                v-motion="`motion-${i}`"
                v-drag="handleDrag(i)"
                :initial="{ scale: 1.5, y: -1000 }"
                :enter="enterVariant(i)"
                class="instant-film"
                :class="goneCards.size === instantFilms.length - i - 1 ? 'pointer-events-auto' : 'pointer-events-none'"
            >
                <sanity-image
                    :asset-id="card.image.asset._id" :w="720" :h="720"
                    :class="[
                        card.orientation === 'landscape'
                            ? 'w-[256px] h-[192px] lg:w-[320px] lg:h-[240px]'
                            : 'w-[192px] h-[256px] lg:w-[240px] lg:h-[320px]',
                    ]"
                    class="image"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.instant-film-container {
    @apply absolute w-full h-full
        flex justify-center items-center
        pointer-events-none select-none touch-none
        will-change-transform;
}

.instant-film {
    @apply bg-white border-white
        border-[0.8em] border-b-[3.2em] lg:border-[1em] lg:border-b-[4em] rounded-[3px]
        will-change-transform;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    filter: sepia(0.05) brightness(0.9);
}

.image {
    @apply object-cover pointer-events-none touch-none select-none;
}
</style>
