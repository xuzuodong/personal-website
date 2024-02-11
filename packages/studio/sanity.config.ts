import { visionTool } from '@sanity/vision'
import { defineConfig } from '@sanity-typed/types'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

import { schemaTypes } from './schemas'

import type { InferSchemaValues } from '@sanity-typed/types'

// eslint-disable-next-line node/prefer-global/process
const projectId = process.env.SANITY_STUDIO_PROJECT_ID

if (!projectId) throw new Error('Missing SANITY_STUDIO_PROJECT_ID')

const config = defineConfig({
    name: 'default',
    title: 'My personal website',

    projectId,
    dataset: 'production',

    plugins: [
        structureTool(),
        unsplashImageAsset(),
        visionTool({ defaultApiVersion: '2023-06-21' }),
        media(),
        internationalizedArray({
            languages: [
                { id: 'en', title: 'English' },
                { id: 'zh', title: '简体中文' },
            ],
            defaultLanguages: ['en'],
            fieldTypes: ['string'],
        }),
    ],

    schema: {
        types: schemaTypes,
    },
})

export default config
export type SanityValues = InferSchemaValues<typeof config>
