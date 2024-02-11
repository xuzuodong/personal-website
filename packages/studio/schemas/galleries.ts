import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

export default defineType({
    name: 'galleries',
    type: 'document',
    title: 'Galleries',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Gallery name',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [defineArrayMember({ type: 'photo' })],
        }),
    ],
},
)
