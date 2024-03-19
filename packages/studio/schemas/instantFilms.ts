import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'instantFilms',
    type: 'document',
    title: 'Instant Films',
    fields: [
        defineField({
            name: 'instantFilms',
            type: 'array',
            title: 'Instant Films',
            of: [defineArrayMember({
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                    metadata: ['blurhash', 'lqip', 'palette', 'exif'],
                    hotspot: true,
                    storeOriginalFilename: false,
                },
            })],
            options: {
                layout: 'grid',
            },
        }),
    ],
})
