import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'

import { schemaTypes } from './schemas'

// eslint-disable-next-line node/prefer-global/process
const projectId = process.env.SANITY_STUDIO_PROJECT_ID

if (!projectId) throw new Error('Missing SANITY_STUDIO_PROJECT_ID')

export default defineConfig({
    name: 'default',
    title: 'My personal website',

    projectId,
    dataset: 'production',

    plugins: [
        structureTool(),
        unsplashImageAsset(),
        visionTool({ defaultApiVersion: '2023-06-21' }),
        media(),
    ],

    schema: {
        types: schemaTypes,
    },
})
