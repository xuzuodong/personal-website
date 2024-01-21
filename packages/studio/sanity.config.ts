import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'

import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'My personal website',

    projectId: '5pzxr6po',
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
