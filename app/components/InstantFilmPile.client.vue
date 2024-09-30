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
    motionInstance?.apply({ x, rotate, transition: { stiffness: 100, damping: 25 } })
}

let draggingInfo: null | { i: number, movementX: number, vx: number, cancel: () => void } = null

/**
 The `@vueuse/gesture` package has an issue where the drag interaction remains unfinished
 if the user drags too quickly, causing the card to lag behind the pointer's movement,
 and releases the mouse before the interaction can catch up.
 To address this, we listen to the document's `pointerup` event to ensure the interaction is properly completed.
 */
useEventListener(document, 'pointerup', async () => {
    await promiseTimeout(0) // determine after `handleDrag` is called
    if (draggingInfo) {
        const { i, movementX, vx, cancel } = draggingInfo
        goneCards.add(i)
        draggingInfo = null
        cancel()
        moveCardOutOfScreen(i, movementX, vx)
    }
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
            motionInstance.apply({ x: 0, y: 0, scale: 1, transition: { stiffness: 400, damping: 50 } })
        }

        // keep the card moving with the pointer
        else {
            draggingInfo = { i, movementX: movement[0], vx, cancel }
            motionInstance.apply({ x: movement[0], scale: 1.1, rotate: movement[0] / 100, transition: { stiffness: 500, damping: 50 } })
        }
    }
}

whenever(() => goneCards.size === props.instantFilms.length, async () => {
    await promiseTimeout(600)
    Object.values(motions).forEach((motion, i) => motion.apply(enterVariant(i)))
    draggingInfo = null
    goneCards.clear()
})

const loadedCount = ref(0)
whenever(() => loadedCount.value === props.instantFilms.length, () => {
    Object.values(motions).forEach((motion, i) => motion.apply(enterVariant(i)))
})
</script>

<template>
    <div v-for="(card, i) in instantFilms" :key="card.image.asset._id" class="film-container">
        <div
            v-motion="`motion-${i}`"
            v-drag="handleDrag(i)"
            :initial="{ scale: 1.5, y: -1000 }"
            :class="goneCards.size === instantFilms.length - i - 1 ? 'pointer-events-auto' : 'pointer-events-none'"
            class="instant-film-frame"
        >
            <my-sanity-image
                :src="card.image.asset._id" :width="720" :height="720"
                :class="[
                    card.orientation === 'landscape'
                        ? 'w-[224px] h-[168px] lg:w-[256px] lg:h-[192px]'
                        : 'w-[168px] h-[224px] lg:w-[192px] lg:h-[256px]',
                ]"
                class="object-cover pointer-events-none touch-none select-none"
                @load="loadedCount++"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.film-container {
    @apply absolute w-full h-full
        flex justify-center items-center
        pointer-events-none select-none touch-none
        will-change-transform;
}

.instant-film-frame {
    @apply bg-white border-white
        border-[0.7em] border-b-[2.8em] md:border-[0.8em] md:border-b-[3.2em] rounded-[3px]
        will-change-transform;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    filter: sepia(0.05) brightness(0.9);
}
</style>
