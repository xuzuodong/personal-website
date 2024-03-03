<script setup lang="ts">
import '~/assets/css/switch-theme.css'

const colorMode = useColorMode()

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function toggleTheme() {
    const systemTheme = getSystemTheme()

    if (colorMode.preference === 'system') {
        systemTheme === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
        return
    }

    if (colorMode.preference === systemTheme) {
        colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'system'
    }
}

function toggleThemeWithViewTransition(event: MouseEvent) {
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )

    // @ts-expect-error startViewTransition
    const transition = document.startViewTransition?.(() => {
        toggleTheme()
    })

    transition.ready.then(() => {
        const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        document.documentElement.animate(
            {
                clipPath: colorMode.value === 'dark' ? [...clipPath].reverse() : clipPath,
            },
            {
                duration: 300,
                easing: 'ease-in-out',
                pseudoElement: colorMode.value === 'dark'
                    ? '::view-transition-old(root)'
                    : '::view-transition-new(root)',
            },
        )
    })
}

function handleSwitchTheme(e: MouseEvent) {
    // @ts-expect-error: View Transition api not ready with ts
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches === true) {
        toggleTheme()
        return
    }
    toggleThemeWithViewTransition(e)
}
</script>

<template>
    <ui-button variant="ghost" size="icon" @click="handleSwitchTheme">
        <icon
            :name="colorMode.value === 'dark' ? 'tdesign:mode-light' : 'tdesign:mode-dark'"
            size="20"
        />
    </ui-button>
</template>
