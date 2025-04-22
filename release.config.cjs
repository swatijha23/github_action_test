module.exports = {
    branches: [
      { name: 'main' },               // Main branch for releases
      { name: 'v*.*.*', prerelease: true }  // Allow tag-driven releases with prerelease status
    ],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/npm',
      '@semantic-release/github',
      '@semantic-release/git',
    ],
    preset: 'conventionalcommits',
    changelogFile: 'CHANGELOG.md',
  };
