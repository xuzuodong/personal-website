<template>
    <div class="mt-20 container">
        <h1 class="text-2xl mb-6">Personal Website UI Layer Playground</h1>

        <div class="flex items-center space-x-4">
            <span class="text-muted-foreground">Current color mode: {{ $colorMode.value }}</span>

            <ui-button variant="default" @click="$colorMode.value = $colorMode.value === 'light' ? 'dark' : 'light'">
                <icon v-if="$colorMode.value === 'light'" name="meteocons:clear-day-fill" size="lg" />
                <icon v-else name="meteocons:clear-night-fill" size="lg" />
                <span class="ml-2">Switch Color Mode</span>
            </ui-button>
        </div>
    </div>
</template>
