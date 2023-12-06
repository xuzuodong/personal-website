<script setup lang="ts">
import type { Handler } from '@vueuse/gesture'
import type { ResolvedSanityImage } from '@sanity/asset-utils'

defineProps<{
    cards: { image: ResolvedSanityImage, orientation: 'portrait' | 'landscape' }[]
}>()

const motions = useMotions()

function handleDrug(i: number) {
    const motionName = `motion-${i + 1}`
    return function ({ movement: [x, y], dragging }: Parameters<Handler<'drag'>>[0]) {
        const motionInstance = motions[motionName]

        if (!motionInstance) return

        const transition = { stiffness: 450, damping: 40 }
        if (!dragging) {
            motionInstance.apply({ x: 0, y: 0, transition })
            return
        }

        motionInstance.apply({ x, y, transition })
    }
}
</script>

<template>
    <div
        v-motion
        :initial="initial"
        :enter="enter" :delay="3000" class="relative h-[500px]"
    >
        <div
            v-for="(card, i) in cards" :key="card.image.asset._id"
            v-motion="`motion-${i + 1}`"
            v-drag="handleDrug(i)"
            :initial="{ scale: 1.5, y: -1000 }"
            :enter="{ scale: 1, y: 0, rotate: (Math.random() - 0.5) * 20, transition: { delay: i * 150, stiffness: 120, damping: 20 } }"
            class="card-wrapper"
        >
            <div class="image-wrapper">
                <sanity-image
                    :asset-id="card.image.asset._id" :w="720" :h="720"
                    :class="[
                        card.orientation === 'landscape'
                            ? 'w-[256px] h-[192px] sm:w-[320px] sm:h-[240px]'
                            : 'w-[192px] h-[256px] sm:w-[240px] sm:h-[320px]',
                    ]"
                    class="object-cover"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-wrapper {
    @apply absolute w-full h-full
        flex justify-center items-center
        touch-none will-change-transform;
}

.image-wrapper {
    @apply bg-white border-white border-[1em] border-b-[4em] rounded-[3px] pointer-events-none will-change-transform select-none;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    filter: sepia(0.05) brightness(0.9);
}
</style>
