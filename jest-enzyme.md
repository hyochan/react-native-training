# [Jest](https://jestjs.io/) & [Enzyme](https://airbnb.io/enzyme/)

### Our work
* At [jest-enzyme branch](https://github.com/dooboolab/react-native-training/tree/jest-enzyme)
  - In `react-navigation-ex` directory.

### Installation
* Jest
  ```
  npm install --save-dev jest babel-jest react-dom
  ```
  + Config
    - You can directly add config in `package.json` but you can also create `jest.config.js` and add settings.
      ```
      module.exports = {
        "preset": "react-native",
        "setupFiles": [
          "./test/jestSetup.js"
        ],
        "transform": {
          "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
        },
        "transformIgnorePatterns": [
          "node_modules/(?!react-native|react-navigation)/",
        ],
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
      ```
  + Test Coverage
    - Add below config for test coverage.
      ```
      "coverageDirectory": "./coverage/",
      "coveragePathIgnorePatterns": [
        "/node_modules/",
        "/test/",
      ],
      "collectCoverage": true,
      ```
* Enzyme
  ```
  npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json
  ```
  - Create `test/jestSetup.js` and write below to complete setup.
    ```
    import { configure } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    configure({ adapter: new Adapter() });
    ```

### Useful Articles
* [8 Benefits of Unit Testing](https://dzone.com/articles/top-8-benefits-of-unit-testing)
* [Testing React with Jest and Enzyme](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)

