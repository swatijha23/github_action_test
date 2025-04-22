module.exports = {
    branches: [
      { name: 'main' }, // Keep the main branch
      { name: 'v*.*.*', prerelease: true } // Allow publishing from tags
    ]
};
