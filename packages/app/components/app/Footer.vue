<script setup lang="ts">

</script>

<template>
    <footer class="container text-center pb-8 pt-2 mt-8">
        <div class="mx-auto">
            <hr
                class="border-black dark:border-white border-opacity-8 dark:border-opacity-8"
            />
            <div class="mt-8 flex justify-between items-center flex-wrap px-4">
                <div class="flex flex-col space-y-2">
                    <div class="text-xs flex items-center space-x-1.5">
                        <span>© {{ new Date().getFullYear() }}</span>
                        <span>Ted Xu</span>
                        <a href="https://github.com/xuzuodong/personal-website" target="_blank">
                            <icon name="mdi:github" size="20" />
                        </a>
                    </div>
                </div>
                <p class="text-xs inline">
                    Powered by
                    <span> </span>
                    <a
                        href="https://nextjs.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Nuxt
                    </a>
                    <span> </span> &amp; <span> </span>
                    <a
                        href="https://nuxt.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Vercel
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>
