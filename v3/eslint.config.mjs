import withNuxt from './.nuxt/eslint.config.mjs'

import stylisticPlugin from '@stylistic/eslint-plugin'

export default withNuxt([
    // Adds a set of default rules to format the code.
    {
        plugins: {
            '@stylistic': stylisticPlugin
        }
    },

    // Vue rules
    {
        rules: {
            'vue/no-multiple-template-root': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/singleline-html-element-content-newline': ['error', {
                ignores: [
                    'span',
                    'pre',
                    'code',
                    'b',
                    'i',
                    'strong',
                    'em',
                    'a',
                    'LvLink'
                ]
            }]
        }
    }
])
