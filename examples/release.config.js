/**
 * Example semantic-release configuration for a project
 * that uses cloudatscale-release
 */
module.exports = {
  extends: 'cloudatscale-release-container',
  // You can override specific options here
  branches: ['main', 'next'],
  // Additional plugins can be added
  plugins: [
    // Use this if you want to notify Slack about releases
    ['semantic-release-slack-bot', {
      notifyOnSuccess: true,
      notifyOnFail: true,
      slackWebhook: 'https://hooks.slack.com/services/YOUR_WEBHOOK_URL',
      markdownReleaseNotes: true
    }]
  ]
};
