import process from 'node:process'

import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    project: {
        basePath: '/studio',
    },
    api: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: 'production',
    },
    server: {
        port: 3535,
    },
})
