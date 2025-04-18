# CloudAtScale Release

Repository to manage releases for CloudAtScale with GitHub actions and semantic-release.

## Overview

This project provides a standardized release management system using semantic-release and GitHub Actions to automate versioning, changelog generation, and container publishing.

## Features

- Automated semantic versioning based on conventional commits
- Standardized changelog generation
- Docker container builds with proper tagging
- Reusable GitHub Action workflows for CI/CD

## Usage

### As a Dependency

To use this package in your project:

1. Add it as a dependency:
   ```bash
   npm install --save-dev cloudatscale-release
   ```

2. Extend your semantic-release config:
   ```json
   {
     "extends": "cloudatscale-release-container"
   }
   ```

### Local Development

Set up the project locally:

```bash
# Clone the repository
git clone https://github.com/CloudAtScale/cloudatscale-release.git
cd cloudatscale-release

# Install dependencies
npm install

# Run a dry-run of the release process
npm run semantic-release-dry
```

### Docker

Build the Docker image locally:

```bash
docker build -t cloudatscale-release .
```

## Configuration

The project includes several shared configurations:

- `containers` - For container-based projects
- `cloudatscale-default` - Default semantic-release configuration

## License

[MIT](LICENSE)
