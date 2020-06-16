module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\", "<rootDir>/src/Environment", "<rootDir>/src/Infrastructure", "<rootDir>/logs"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ["**/src/Tests/Handlers/**/*.[jt]s?(x)"]
};