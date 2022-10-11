/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
    enumsAsStrings: false,
    react: true,
    scalarTypes: { DateTime: 'string' },
    preImport: '',
    introspection: {
        endpoint: 'https://api-mumbai.lens.dev',
        headers: {},
    },
    destination: './src/gqty/index.ts',
    subscriptions: false,
};

module.exports = config;