import ArticleBlockquite from '~/components/article/Blockquite.vue'
import WorkContentImg from '~/components/work/ContentImg.vue'

import { Icon } from '#components'

import type { PortableTextComponentProps, PortableTextVueComponents } from '@portabletext/vue'
import type { ProjectQueryResult } from '~/types/sanity'

export const myPortableTextComponents: Partial<PortableTextVueComponents> = {
    types: {
        image: ({ value }: PortableTextComponentProps<NonNullable<ProjectQueryResult>['coverImage'] | null>) => h(WorkContentImg, { img: value, class: 'mb-6' }),
    },
    block: {
        h1: (_, { slots }) => h('h1', { class: 'text-2xl font-bold mb-6' }, slots.default?.()),
        h2: (_, { slots }) => h('h2', { class: 'text-lg font-bold mb-4' }, slots.default?.()),
        h3: (_, { slots }) => h('h3', { class: 'text-base font-bold mb-4' }, slots.default?.()),
        normal: (_, { slots }) => h('p', { class: 'mb-4' }, slots.default?.()),
        blockquote: props => h(ArticleBlockquite, { ...props, class: 'mb-6' }),
    },
    list: {
        bullet: (_, { slots }) => h('ul', { class: 'list-disc ml-6 mb-4' }, slots.default?.()),
        number: (_, { slots }) => h('ol', { class: 'list-decimal ml-6 mb-4' }, slots.default?.()),
    },
    listItem: {
        bullet: (_, { slots }) => h('li', { class: 'mb-2' }, slots.default?.()),
        number: (_, { slots }) => h('li', { class: 'mb-2' }, slots.default?.()),
    },
    marks: {
        strong: (_, { slots }) => h('strong', slots.default?.()),
        em: (_, { slots }) => h('em', slots.default?.()),
        underline: (_, { slots }) => h('u', slots.default?.()),
        code: (_, { slots }) => h('code', slots.default?.()),
        link: ({ value }, { slots }) => {
            const isExternal = !value.href.startsWith('/')
            const rel = isExternal ? 'noreferrer noopener' : undefined
            const target = isExternal ? '_blank' : undefined
            return h(
                'a',
                { href: value.href, rel, target, class: 'px-1 underline font-semibold visited:text-muted-foreground' },
                [slots.default?.(), isExternal && h(Icon, { name: 'iconamoon:link-external-light', class: 'ml-[2px]' })],
            )
        },
    },
}
