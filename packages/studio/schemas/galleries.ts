import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'galleries',
    type: 'document',
    title: 'Galleries',
    fields: [
        defineField({
            name: 'name',
            type: 'internationalizedArrayString',
            title: 'Gallery name',
            validation: Rule => Rule
                .required()
                .custom((name: { value: string }[]) => !!name?.[0].value || 'Name is required'),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name.0.value',
                maxLength: 200,
            },
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'photographDate',
            type: 'date',
            title: 'Photograph date',
            options: {
                dateFormat: 'YYYY/MM/DD',
            },
            initialValue: () => {
                const date = new Date()
                return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
            },
        }),

        defineField({
            name: 'publishDate',
            type: 'date',
            title: 'Publish date',
            options: {
                dateFormat: 'YYYY/MM/DD',
            },
            initialValue: () => {
                const date = new Date()
                return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
            },
        }),

        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
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

        defineField({
            name: 'description',
            type: 'internationalizedArrayText',
            title: 'Description',
        }),
    ],
    preview: {
        select: {
            // https://www.sanity.io/docs/previews-list-views#62febb15a63a
            title: 'name.1.value',
            subtitle: 'name.0.value',
            media: 'images.0.asset',
        },
    },
})
