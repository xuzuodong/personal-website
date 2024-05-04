import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        defineField({
            name: 'name',
            type: 'internationalizedArrayString',
            title: 'Project name',
            validation: Rule => Rule.required(),
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
            name: 'url',
            type: 'url',
            title: 'URL',
        }),

        defineField({
            name: 'description',
            type: 'internationalizedArrayText',
            title: 'Description',
        }),

        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
        }),

        defineField({
            name: 'coverImage',
            type: 'image',
            title: 'Cover image',
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: 'previewImages',
            type: 'array',
            title: 'Preview images / videos',
            of: [{ type: 'image' }, { type: 'file' }],
        }),

        defineField({
            name: 'content',
            type: 'internationalizedArrayFormattedText',
            title: 'Content',
        }),
    ],
    preview: {
        select: {
            title: 'name.0.value',
        },
    },
})
