<template>
    <footer
        class="h-[var(--footer-height)] flex items-center text-center border-t"
        :class="$route.path !== '/' && 'mt-8'"
    >
        <div class="container flex justify-between items-center flex-wrap">
            <div class="flex flex-col space-y-2">
                <div class="text-xs flex items-center space-x-1.5">
                    <span>© {{ new Date().getFullYear() }}</span>
                    <span>Ted Xu</span>
                    <ui-button variant="ghost" class="h-7 w-7 p-0">
                        <a
                            href="https://github.com/xuzuodong/personal-website"
                            target="_blank"
                        >
                            <icon name="mdi:github" size="20" />
                        </a>
                    </ui-button>
                </div>
            </div>
            <p class="text-xs inline">
                Powered by
                <span> </span>
                <a
                    href="https://nuxt.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="hover:underline"
                >
                    Nuxt
                </a>
                <span> </span> &amp; <span> </span>
                <a
                    href="https://vercel.com/home"
                    rel="noopener noreferrer"
                    target="_blank"
                    class="hover:underline"
                >
                    Vercel
                </a>
            </p>
        </div>
    </footer>
</template>
