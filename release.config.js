module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      [
        '@semantic-release/exec',
        {
          prepareCmd: 'npm run postversion && git commit -am "chore(release): Update package.json version [skip ci]"',
        },
      ],
      '@semantic-release/git',
    ],
  };
  