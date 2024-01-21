import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    project: {
        basePath: '/studio',
    },
    api: {
        projectId: 'x345np1f',
        dataset: 'production',
    },
    server: {
        port: 3535,
    },
})
