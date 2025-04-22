module.exports = {
    branches: [
      { name: 'main' }, // Keep the main branch
      { name: 'refs/tags/*', prerelease: true } // Allow publishing from tags
    ]
};
