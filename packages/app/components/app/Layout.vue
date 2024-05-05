<script lang="tsx">
export default defineComponent({
    props: {
        title: {
            type: String,
        },

        level: {
            type: String as PropType<'1' | '2'>,
            default: '1',
        },
    },

    setup(props, { slots }) {
        const contailerClass = {
            1: 'mt-16 mb-8',
            2: 'mt-12',
        }

        const titleClass = {
            1: [
                'mb-4 lg:mb-12 font-mono font-bold',
                'text-2xl lg:text-4xl',
                'bg-clip-text text-transparent inline-block bg-gradient-to-r from-foreground to-muted-foreground',
            ],
            2: 'pb-2 px-2 text-center text-2xl font-bold',
        }

        const Title = {
            1: () => (
                <div class="text-center">
                    <h1 class={titleClass['1']}>{props.title}</h1>
                </div>
            ),
            2: () => (
                <h2 class={titleClass['2']}>{props.title}</h2>
            ),
        }

        return () => (
            <div class={contailerClass[props.level]}>
                {Title[props.level]()}
                {slots.default?.()}
            </div>
        )
    },
})
</script>
