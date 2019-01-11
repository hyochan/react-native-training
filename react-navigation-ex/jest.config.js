module.exports = {
  "preset": "react-native",
  "coverageDirectory": "./coverage/",
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/",
  ],
  "collectCoverage": true,
  "transformIgnorePatterns": [
    "node_modules/(?!react-native|react-navigation)/",
  ],
  "setupFiles": [
    "./test/jestSetup.js"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "ios.js",
    "ios.jsx",
    "android.js",
    "android.jsx"
  ],
  "snapshotSerializers": [
    "./node_modules/enzyme-to-json/serializer"
  ],
  "testPathIgnorePatterns": [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ]
};
