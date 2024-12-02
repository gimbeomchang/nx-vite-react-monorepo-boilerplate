const path = require('path');

const getRelativePath = (files) => files.map((file) => path.relative(process.cwd(), file));

module.exports = {
  '*.{ts,tsx}': (files) =>
    `nx affected --target=typecheck --files=${getRelativePath(files).join(',')} --parallel=10`,
  '*.{js,jsx,ts,tsx}': (files) => [
    `nx affected --target=lint --files=${getRelativePath(files).join(',')}`,
    `nx format:write --files=${getRelativePath(files).join(',')}`,
  ],
  '*.{css,scss}': ['prettier --write', 'stylelint'],
  '*.{json,md}': ['prettier --write'],
};
