const changelogFormat = [
    "@semantic-release/release-notes-generator",
    {
        "preset": "conventionalcommits",
        "presetConfig": {
            "types": [
                {
                    "section": "🚀 Features",
                    "type": "feat",
                    "hidden": false,
                },
                {
                    "hidden": false,
                    "section": "🐛 Bug Fixes",
                    "type": "fix"
                },
                {
                    "hidden": false,
                    "section": "📈 Performance Improvements",
                    "type": "perf"
                },
                {
                    "hidden": false,
                    "section": "🔙 Reverts",
                    "type": "revert"
                },
                {
                    "hidden": false,
                    "section": "📚 Documentation",
                    "type": "docs"
                },
                {
                    "hidden": false,
                    "section": "😎 Styles",
                    "type": "style"
                },
                {
                    "hidden": false,
                    "section": "📦 Miscellaneous Chores",
                    "type": "chore"
                },
                {
                    "hidden": false,
                    "section": "🛠️ Code Refactoring",
                    "type": "refactor"
                },
                {
                    "hidden": false,
                    "section": "🤞 Tests",
                    "type": "test"
                },
                {
                    "hidden": false,
                    "section": "🏗️ Build System",
                    "type": "build"
                },
                {
                    "hidden": false,
                    "section": "🤖 Continuous Integration",
                    "type": "ci"
                }
            ]
        }
    }
];

const commitAnalyzerConfig = [
    "@semantic-release/commit-analyzer",
    {
        "preset": "conventionalcommits",
        "releaseRules": [
            {
                "release": "patch",
                "scope": "deps",
                "type": "chore"
            }
        ]
    }
];

const releaseBranchConfig = [
    { "branches": ["main"] }
];

const assetsConfig = [
    "@semantic-release/git",
    {
        "assets": [
            "CHANGELOG.md",
            "${process.env.RELEASE_FILE_TO_ADD || ''}",
        ],
        "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
    }
];

// Fix the way we create the config object
const semanticReleaseConfig = {
    plugins: [
        commitAnalyzerConfig,
        changelogFormat,
        "@semantic-release/changelog",
        assetsConfig
    ],
    branches: ["main"]
};

exports.semanticReleaseConfig = semanticReleaseConfig;
