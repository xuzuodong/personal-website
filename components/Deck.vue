<script setup lang="ts">
import { useMotions } from '@vueuse/motion'
import { promiseTimeout } from '@vueuse/core'

import type { Handler } from '@vueuse/gesture'
import type { ResolvedSanityImage } from '@sanity/asset-utils'

const props = defineProps<{
    instantFilms: { image: ResolvedSanityImage, orientation: 'portrait' | 'landscape' }[]
}>()

function enterVariant(i: number) {
    return { x: 0, y: 0, scale: 1, rotate: (Math.random() - 0.5) * 20, transition: { delay: i * 150, stiffness: 120, damping: 20 } }
}

const motions = useMotions()

const goneCards = reactive(new Set())

whenever(() => goneCards.size === props.instantFilms.length, async () => {
    await promiseTimeout(600)
    Object.values(motions).forEach((motion, i) => motion.apply(enterVariant(i)))
    goneCards.clear()
})

function handleDrug(i: number) {
    const motionName = `motion-${i}`
    return function ({ movement, dragging, velocities: [vx] }: Parameters<Handler<'drag'>>[0]) {
        const motionInstance = motions[motionName]
        if (!motionInstance) return

        const trigger = Math.abs(vx) > 0.2
        const springParams = { stiffness: 120, damping: 20 }

        // move the card out of the screen
        if (!dragging && trigger) {
            goneCards.add(i)

            const x = (200 + window.innerWidth) * Math.sign(vx)
            const rotate = movement[0] / 100 + (Math.sign(vx) * 10 * vx)

            motionInstance.apply({ x, rotate, transition: springParams })
        }

        // move the card back to the center
        else if (!dragging) {
            motionInstance.apply({ x: 0, y: 0, scale: 1, transition: { stiffness: 120, damping: 15 } })
        }

        // move the card with the cursor
        else {
            const x = movement[0]
            motionInstance.apply({ x, scale: 1.1, rotate: 0, transition: springParams })
        }
    }
}
</script>

<template>
    <div class="relative h-[500px]">
        <div
            v-for="(card, i) in instantFilms" :key="card.image.asset._id"
            class="instant-film-container"
        >
            <div
                v-motion="`motion-${i}`"
                v-drag="handleDrug(i)"
                :initial="{ scale: 1.5, y: -1000 }"
                :enter="enterVariant(i)"
                class="instant-film"
                :class="goneCards.size === instantFilms.length - i - 1 ? 'pointer-events-auto' : 'pointer-events-none'"
            >
                <sanity-image
                    :asset-id="card.image.asset._id" :w="720" :h="720"
                    :class="[
                        card.orientation === 'landscape'
                            ? 'w-[256px] h-[192px] sm:w-[320px] sm:h-[240px]'
                            : 'w-[192px] h-[256px] sm:w-[240px] sm:h-[320px]',
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
    @apply bg-white border-white border-[1em] border-b-[4em] rounded-[3px]
        will-change-transform;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    filter: sepia(0.05) brightness(0.9);
}

.image {
    @apply object-cover pointer-events-none touch-none select-none;
}
</style>
