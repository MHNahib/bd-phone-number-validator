/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
};
