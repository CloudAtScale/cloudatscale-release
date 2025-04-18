// Use CommonJS require instead of ES6 import
const { semanticReleaseConfig } = require('cloudatscale-release-semantic-release-default');

let config = Object.assign({}, semanticReleaseConfig);

module.exports = config;
