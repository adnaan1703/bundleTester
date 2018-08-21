'use strict';

const path = require('path');

// const ROOT_PATH = path.resolve(__dirname, 'basic_bundle');
const ROOT_PATH = '/Users/adnaan.ahmed/Projects/open/bundleTester';

module.exports = {
    cacheStores: [],
    maxWorkers: 1,
    projectRoot: ROOT_PATH,
    reporter: {
        update() {
            console.log('This is logged... wtf!');
        }
    },
    transformModulePath: require.resolve('../node_modules/metro/src/reactNativeTransformer'),
    resolver: {
        useWatchman: false
    },
    transformer: {
        assetRegistryPath: path.join(ROOT_PATH, 'build/assets')
    }
};