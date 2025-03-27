// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Optimize file watching
config.watchFolders = [__dirname];

// Configure asset handling
config.resolver.assetExts.push(
  // Add any additional asset extensions here
  'png',
  'jpg',
  'jpeg',
  'gif',
  'webp',
  'ttf',
  'otf',
  'woff',
  'woff2'
);

// Configure source extensions
config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx'];

// Configure asset handling
config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

module.exports = config; 