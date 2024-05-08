import { visionTool } from '@sanity/vision'
import { defineConfig, defineField } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { singletonTools } from 'sanity-plugin-singleton-tools'

import { schemaTypes } from './schemas'
import { structure } from './deskStructure'

// eslint-disable-next-line node/prefer-global/process
const projectId = process.env.SANITY_STUDIO_PROJECT_ID

if (!projectId) throw new Error('Missing SANITY_STUDIO_PROJECT_ID')

const config = defineConfig({
    name: 'default',
    title: 'My personal website',

    projectId,
    dataset: 'production',

    plugins: [
        structureTool({ structure }),
        unsplashImageAsset(),
        visionTool({ defaultApiVersion: '2023-06-21' }),
        singletonTools(),
        media(),
        internationalizedArray({
            languages: [
                { id: 'en', title: 'English' },
                { id: 'zh-CN', title: '简体中文' },
                { id: 'zh-TW', title: '繁體中文' },
            ],
            defaultLanguages: ['en'],
            fieldTypes: [
                'string',
                'text',
                // Internationalized array of blocks
                defineField({
                    name: 'formattedText',
                    type: 'array',
                    of: [{ type: 'block' }, { type: 'image' }],
                }),
            ],
        }),
    ],

    schema: {
        types: schemaTypes,
    },
})

export default config
