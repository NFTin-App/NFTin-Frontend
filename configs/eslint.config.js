const path = require('path');
const rootSrc = process.cwd();

const extendLocalRules = process.env.ESLINT_RULES_DEV || undefined;

const plugins = [
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'import',
    'unused-imports',
    'effector',
];

const eslintExtends = [
    '@react-native-community',
    'plugin:effector/recommended',
    'plugin:effector/scope',
    'standard-with-typescript',
    'prettier',
];

const strictRules = {
    '@typescript-eslint/prefer-regexp-exec': 0,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-redeclare': 'error',
};

const baseRules = {
    'prettier/prettier': 'error',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'error',
    'react/jsx-curly-spacing': 'off',
    'react-native/no-raw-text': [
        'warn',
        {
            skip: ['CustomText'],
        },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-native/no-single-element-style-arrays': 'warn',
    'object-curly-spacing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': [
        'error',
        {
            checksVoidReturn: {
                arguments: false,
                attributes: false,
            },
        },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
            ignoreStringArrays: true,
        },
    ],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    semi: 'off',
    'no-console': [
        'error',
        {
            allow: ['error'],
        },
    ],
    'no-debugger': 'error',
    'no-use-before-define': 'off',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
        'error',
        {
            groups: [
                ['^react.*', '^[a-zA-Z].*'],
                ['^@(.*|$)'],
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ['^.+\\.json$'],
                ['^.+\\.s?css$'],
            ],
        },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
        'error',
        {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
        },
    ],
    'react/jsx-curly-brace-presence': ['error', 'always'],
};

let extendRules = {};

if (extendLocalRules) {
    const extendLocalRulesPath = path.resolve(rootSrc, extendLocalRules);
    const extendRulesData = require(extendLocalRulesPath);

    if (typeof extendRulesData === 'object') {
        extendRules = extendRulesData;
    }
}

const rules = {
    ...baseRules,
    ...extendRules,
    ...strictRules,
};

module.exports = {
    root: true,
    extends: eslintExtends,
    parser: '@typescript-eslint/parser',
    plugins,
    rules,
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    env: {
        'react-native/react-native': true,
    },
};
