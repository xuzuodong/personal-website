import { defineField, defineType } from '@sanity-typed/types'

export default defineType({
    name: 'photo',
    title: 'Photo',
    type: 'object',
    fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                metadata: ['blurhash', 'lqip', 'palette', 'exif'],
                hotspot: true,
                storeOriginalFilename: false,
            },
        }),
    ],
})
