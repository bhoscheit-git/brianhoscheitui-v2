const config = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: "http://localhost/"
    },
    collectCoverage: true,
    moduleNameMapper: {
        '\\.(css)': 'identity-obj-proxy',
        '\\.(png)': '<rootDir>/mocks/fileMock.js'
    },
    setupFilesAfterEnv:['./src/setupTests.js']
  };
  
  module.exports = config;