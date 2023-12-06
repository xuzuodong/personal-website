import antfu from '@antfu/eslint-config'

export default antfu(
    {
        stylistic: {
            indent: 4,
        },
    },
    {
        rules: {
            // syntax
            'no-console': 'warn',
            'ts/no-shadow': 'error',

            // no unused vars
            'no-unused-vars': 'off',
            'unused-imports/no-unused-vars': 'off',
            'ts/no-unused-vars': ['warn'],

            // whitespacing, semicolon, comma
            'style/no-trailing-spaces': 'warn',
            'style/no-multi-spaces': 'warn',
            'style/comma-dangle': ['warn'],
            'style/indent': ['warn'],
            'antfu/if-newline': 'off',

            // array and object
            'antfu/consistent-list-newline': 'off',
            'style/array-bracket-spacing': 'warn',
            'style/array-bracket-newline': ['warn', 'consistent'],
            'style/array-element-newline': ['warn', 'consistent'],

            // imports
            'unused-imports/no-unused-imports': 'off',
            'import/order': [
                'warn',
                {
                    'groups': ['builtin', 'external', ['internal', 'index', 'parent', 'sibling'], ['unknown', 'object'], 'type'],
                    'pathGroups': [{ pattern: '~/**', group: 'internal' }, { pattern: '@/**', group: 'internal' }],
                    'pathGroupsExcludedImportTypes': ['type'], // type 和其他 group 冲突的, 永远当 type 处理
                    'newlines-between': 'always',
                },
            ],
            'import/newline-after-import': 'warn',

            // vue
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-indent': ['warn', 4],
            'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
            'vue/html-self-closing': ['warn', { html: { normal: 'never', void: 'always' } }],
        },
    },
)
