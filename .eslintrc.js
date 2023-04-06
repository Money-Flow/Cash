module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        "plugin:typescript-sort-keys/recommended"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ['react', '@typescript-eslint', 'prettier', "typescript-sort-keys"],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        "typescript-sort-keys/interface": [
          "error",
          "asc",
          { "caseSensitive": true, "natural": false, "requiredFirst": true }
        ],
        "typescript-sort-keys/string-enum": "error",
        "import/order": ["error", {
            "groups": ["external", ["internal", "type"], "unknown"],
            "newlines-between": "always-and-inside-groups",
            "pathGroups": [
                  {
                    "pattern": "classnames{*,/**}",
                    "group": "external",
                    "position": "before"
                  },
                  {
                    "pattern": "*apollo*{*,/**}",
                    "group": "external",
                    "position": "before"
                  },
                  {
                    "pattern": "react*{*,/**}",
                    "group": "external",
                    "position": "before"
                  },
                  {
                    "pattern": "react",
                    "group": "external",
                    "position": "after"
                  },
                  {
                    "pattern": "@storybook{*,/**}",
                    "group": "external",
                  },
                  {
                    "pattern": "~/+(containers|components|pages|layouts){*,/**}",
                    "group": "internal",
                  },
                {
                    "pattern": "~/app{*,/**}",
                    "group": "internal",
                  },
                {
                    "pattern": "~/graphql/+(mutations|queries){*,/**}",
                    "group": "internal",
                },
                {
                    "pattern": "~/api",
                    "group": "internal",
                  },
                {
                  "pattern": "~/store{*,/**}",
                  "group": "internal",
                },
                {
                    "pattern": "~/+(routes|constants|fragments){*,/**}",
                    "group": "internal",
                },
                {
                  "pattern": "~/schema",
                  "group": "internal",
                },
                {
                  "pattern": "~/types{*,/**}",
                  "group": "internal",
                },
                {
                  "pattern": "~/hooks/{*,/**}",
                  "group": "internal",
                },
                {
                  "pattern": "~/utils",
                  "group": "internal",
                },
                {
                  "pattern": "~/assets{*,/**}",
                  "group": "internal",
                },
                {
                  "pattern": "~/module{*,/**}",
                  "group": "internal",
                }
            ],
            "pathGroupsExcludedImportTypes": ['react'],
            "newlines-between": "always",
            "alphabetize": {
                "order": "asc",
                "caseInsensitive": true
            }
        }],

        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['js', 'jsx', '.ts', '.tsx', '.css'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['playwright.config.ts', 'tests', 'tests-examples'],
}
