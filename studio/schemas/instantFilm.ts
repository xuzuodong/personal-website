import { defineArrayMember, defineField, defineType } from 'sanity'

import { imageFieldMetadataWithExif } from './utils'

export default defineType({
    name: 'instantFilm',
    type: 'document',
    title: 'Instant Films',
    fields: [
        defineField({
            name: 'instantFilms',
            type: 'array',
            title: 'All Instant Films',
            description: 'Only the last 5 images will be displayed on the homepage.',
            of: [defineArrayMember({
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                    metadata: imageFieldMetadataWithExif,
                    hotspot: true,
                    storeOriginalFilename: false,
                },
            })],
            options: {
                layout: 'grid',
            },
        }),
    ],
    options: {
        singleton: true,
    },
})
