module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    () => 'nx affected:lint --uncommitted',
  ],
  '*.{json,css,scss,md}': ['prettier --write'],
};
