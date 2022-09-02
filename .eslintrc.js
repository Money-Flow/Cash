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
    plugins: ['react', '@typescript-eslint', 'prettier'],
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
        "import/order": ["error", {
            "groups": ["external", ["internal", "type"], "unknown"],
            "pathGroups": [
                {
                  "pattern": "react",
                  "group": "external",
                  "position": "before"
                },
                {
                    "pattern": "react*{*,/**}",
                    "group": "external",
                    "position": "after"
                  },
                  {
                    "pattern": "*apollo*{*,/**}",
                    "group": "external",
                    "position": "after"
                  },
                {
                  "pattern": "**/+(containers|components|pages|layouts){*,/**}",
                  "group": "internal",
                  "position": "before"

                },
                {
                    "pattern": "**/app{*,/**}",
                    "group": "internal",
                    "position": "before"
                  },
                {
                  "pattern": "**/hooks",
                  "group": "internal",
                  "position": "before"
                },
                {
                    "pattern": "**/graphql/+(mutations|queries){*,/**}",
                    "group": "internal",
                    "posfition": "before"
                },
                {
                  "pattern": "**/utils",
                  "group": "internal",
                  "position": "before"
                },
                {
                    "pattern": "**/api",
                    "group": "internal",
                    "position": "before"
                  },
                {
                  "pattern": "**/store{*,/**}",
                  "group": "internal",
                  "position": "before"
                },
                {
                    "pattern": "**/+(routes|constants|fragments){*,/**}",
                    "group": "internal",
                    "position": "before"
                },
                {
                  "pattern": "**/schema",
                  "group": "internal",
                  "position": "before"
                },
                {
                  "pattern": "**/types{*,/**}",
                  "group": "internal",
                  "position": "after"
                },
                {
                  "pattern": "**/assets{*,/**}",
                  "group": "internal",
                  "position": "after"
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
        'react/require-default-props': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src', 'tests'],
                extensions: ['.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['playwright.config.ts',],
}
