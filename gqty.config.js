/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
    enumsAsStrings: false,
    react: false,
    scalarTypes: { DateTime: 'string' },
    preImport: '',
    introspection: {
        endpoint: 'https://api-mumbai.lens.dev',
        headers: {},
    },
    destination: './src/shared/api/lens/generated/index.ts',
    subscriptions: false,
};

module.exports = config;