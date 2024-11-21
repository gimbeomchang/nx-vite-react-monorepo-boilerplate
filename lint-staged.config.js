module.exports = {
  // Run TypeScript type checking on staged files
  '**/*.{ts,tsx}': [
    // Run TypeScript compiler check
    (filenames) => `nx run-many --target=tsc --files=${filenames.join(',')}`,

    // Run ESLint with auto-fix
    (filenames) =>
      `nx run-many --target=lint --files=${filenames.join(',')} --fix`,

    // Run Prettier to format files
    (filenames) => `nx run-many --target=format --files=${filenames.join(',')}`,
  ],

  // Additional configurations for other file types if needed
  '**/*.{js,jsx,json,yml,yaml,md}': [
    // Prettier formatting for other file types
    (filenames) => `prettier --write ${filenames.join(' ')}`,
  ],
};
