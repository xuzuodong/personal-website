import eslintConfig from '@sanomics/eslint-config'

export default eslintConfig({}, {
    files: ['packages/ui/components/ui/**/*.{vue,ts}'],
    rules: {
        'import/order': ['off'],
        'style/indent': ['warn', 2],
        'ts/no-unused-vars': ['off'],
        'vue/html-indent': ['warn', 2],
        'vue/html-self-closing': ['off'],
        'vue/component-name-in-template-casing': ['off'],
    },
})
