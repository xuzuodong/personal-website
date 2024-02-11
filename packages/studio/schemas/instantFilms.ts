import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

export default defineType({
    name: 'instantFilms',
    type: 'document',
    title: 'Instant Films',
    fields: [
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [defineArrayMember({ type: 'photo' })],
        }),
    ],
})
