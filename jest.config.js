module.exports = {
  roots: ["<rootDir>/src"],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  errorOnDeprecated: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["/node_modules/, dist/"],
  testMatch: [
    "**/*.spec.ts",
  ],
  verbose: true,
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
};
