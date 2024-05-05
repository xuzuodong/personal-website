<script lang="tsx">
export default defineComponent({
    props: {
        title: {
            type: String,
        },

        variant: {
            type: String as PropType<'global' | 'chapter'>,
            default: 'global',
        },
    },

    setup(props, { slots }) {
        const contailerClass = {
            global: 'mt-16',
            chapter: 'mt-12',
        }

        const titleClass = {
            global: [
                'mb-4 lg:mb-12 font-mono font-bold',
                'text-2xl lg:text-4xl',
                'bg-clip-text text-transparent inline-block bg-gradient-to-r from-foreground to-muted-foreground',
            ],
            chapter: 'pb-2 px-2 text-center text-2xl font-bold',
        }

        const Title = {
            global: () => (
                <div class="text-center">
                    <h1 class={titleClass.global}>{props.title}</h1>
                </div>
            ),
            chapter: () => (
                <h2 class={titleClass.chapter}>{props.title}</h2>
            ),
        }

        return () => (
            <div class={contailerClass[props.variant]}>
                {Title[props.variant]()}
                {slots.default?.()}
            </div>
        )
    },
})
</script>
