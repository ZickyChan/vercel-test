module.exports = {
  collectCoverageFrom: ['pages/**/*.js'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  resetModules: true,
  testMatch: ['<rootDir>/test/**/*.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  modulePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/public/',
    '<rootDir>/styles/',
    '<rootDir>/node_modules/',
    '<rootDir>/test/testClient.js',
  ],
};
