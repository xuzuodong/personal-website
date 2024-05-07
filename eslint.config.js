import eslintConfig from '@sanomics/eslint-config'

export default eslintConfig({
    ignores: [
        'packages/app/types/sanity/index.ts',
        'packages/app/types/sanity/schemas.json',
    ],
})
