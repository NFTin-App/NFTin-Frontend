const { getDefaultConfig } = require('metro-config');
const extraNodeModules = require('node-libs-browser');

module.exports = (async () => {
    const {
        resolver: { sourceExts },
    } = await getDefaultConfig();
    return {
        resolver: {
            sourceExts: [...sourceExts],
            extraNodeModules,
        },
    };
})();
