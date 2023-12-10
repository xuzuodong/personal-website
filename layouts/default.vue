<template>
    <div class="h-full flex flex-col">
        <app-header />
        <div class="flex-1 max-h-[740px] min-h-[540px] container mx-auto">
            <slot></slot>
        </div>
        <app-footer />
    </div>
</template>
