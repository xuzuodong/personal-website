<template>
    <div class="instant-film">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.instant-film {
    @apply bg-white border-white
        border-[0.7em] border-b-[2.8em] md:border-[0.8em] md:border-b-[3.2em] 2xl:border-[1em] 2xl:border-b-[4em] rounded-[3px]
        will-change-transform;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
    filter: sepia(0.05) brightness(0.9);
}
</style>
