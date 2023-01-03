const { ALIASES, IS_RELEASE, MINIMIZERS, plugins, rules } = require('./constants');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = function (env) {
    const base = env && env.base && env.base !== true ? `/${env.base}/` : '/';

    return {
        context: path.resolve(__dirname, '../src'),
        devtool: IS_RELEASE ? undefined : 'eval-cheap-module-source-map',
        entry: './index.js',
        externals: [nodeExternals()],
        mode: IS_RELEASE ? 'development' : 'production',
        module: {
            rules: rules(true),
        },
        optimization: {
            chunkIds: 'named',
            minimize: true,
            minimizer: MINIMIZERS,
        },
        output: {
            filename: 'js/[name].[hash].js',
            publicPath: '/',
        },
        plugins: plugins({
            base,
            is_test_env: true,
            env: {},
        }),
        resolve: {
            alias: ALIASES,
            extensions: ['.js', '.jsx'],
        },
        target: 'node',
    };
};
