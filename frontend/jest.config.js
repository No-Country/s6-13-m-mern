/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/gitlab-ci-local/'],
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx'],
};
