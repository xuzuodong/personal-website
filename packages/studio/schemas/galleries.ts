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
            name: 'description',
            type: 'internationalizedArrayText',
            title: 'Description',
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
