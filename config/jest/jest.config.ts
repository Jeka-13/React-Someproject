import type { Config } from 'jest'

const config: Config = {
  // automock: false,
  // bail: 0,
  // cacheDirectory: "/private/var/folders/0s/3xnls2v11s59ys17g834rwx00000gn/T/jest_dx",
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleDirectories: [
    'node_modules', 'src'
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  rootDir: '../../',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(scss|less|css)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/config/jest/jestEmptyComponent.tsx'
  }

  // collectCoverage: false,

  // collectCoverageFrom: undefined,

  // coverageDirectory: undefined,

  // coverageProvider: "babel",

  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // coverageThreshold: undefined,

  // dependencyExtractor: undefined,

  // errorOnDeprecated: false,

  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // forceCoverageMatch: [],

  // globalSetup: undefined,

  // globalTeardown: undefined,

  // globals: {},

  // maxWorkers: "50%",,

  // moduleNameMapper: {},

  // modulePathIgnorePatterns: [],

  // notify: false,

  // notifyMode: "failure-change",

  // preset: undefined,

  // projects: undefined,

  // reporters: undefined,

  // resetMocks: false,

  // resetModules: false,

  // resolver: undefined,

  // restoreMocks: false,

  // roots: [
  //   "<rootDir>"
  // ],

  // runner: "jest-runner",

  // setupFiles: [],

  // setupFilesAfterEnv: [],

  // slowTestThreshold: 5,

  // snapshotSerializers: [],

  // testEnvironmentOptions: {},

  // testLocationInResults: false,

  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // testRegex: [],

  // testResultsProcessor: undefined,

  // testRunner: "jest-circus/runner",

  // transform: undefined,

  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // unmockedModulePathPatterns: undefined,

  // verbose: undefined,

  // watchPathIgnorePatterns: [],

  // watchman: true,
}

export default config
