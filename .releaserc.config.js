/**
 * Main semantic-release configuration for CloudAtScale Release
 * This serves as both the configuration for this project and a reference for users.
 */

// Import your default configuration
const { semanticReleaseConfig } = require('./shared-config/cloudatscale-default/cloudatscale-default');

// Create a configuration specific to this project, extending your default config
const config = {
  // Spread the default config
  ...semanticReleaseConfig,

  // Add plugins specific to this project if needed
  plugins: [
    ...semanticReleaseConfig.plugins,
    // Automatically generate CHANGELOG.md with each release
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md"
    }],
    // Commit the CHANGELOG.md file
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
  ],

  // Define GitHub specifics
  githubOptions: {
    baseUri: "https://api.github.com"
  }
};

module.exports = config;
