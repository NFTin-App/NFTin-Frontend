module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        '@babel/plugin-proposal-export-namespace-from',
        [
            'module-resolver',
            {
                alias: {
                    '@app': `./src/app`,
                    '@screens': `./src/screens`,
                    '@process': `./src/process`,
                    '@features': `./src/features`,
                    '@entities': `./src/entities`,
                    '@shared': `./src/shared`,
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
