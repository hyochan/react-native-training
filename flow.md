# flow
You can see how the [project](https://github.com/dooboolab/react-native-training/blob/master/building-screens) integrated flow in [commit](https://github.com/dooboolab/react-native-training/commit/4eb5848524080e71097a691ccafaa0130b009287).

In official [flow](https://flow.org/) site, you can checkout how to install it in your project. However, the guide isn't sufficient if you are noobie. Firstly, doc is explained in `babel6` but from `react-native@56`, we are using `babel7`.

You should follow below tutorial to integrate in your `react-native` project.
1. Install `babel-cli` and `babel-preset-flow` with `babel7` compatible in `dev` dependency.
  ```
  npm install --save-dev @babel/cli @babel/preset-flow
  ```
2. Check flow-bin version in `.flowconfig` file in your `react-native` project then install the compatible version.
  ```
  npm install --save-dev flow-bin@0.78.0
  ```
3. Add `@babel/flow` to your babel config `presets`.
  ```
  {
    "presets": ["module:metro-react-native-babel-preset", "@babel/flow"]
  }
  ```
4. Add flow script in `package.json`.
  ```
    "scripts": {
      "start": "node node_modules/react-native/local-cli/cli.js start",
      "test": "jest",
      "flow": "flow"
    },
  ```
5. In files which you want apply flow, add `// @flow` at the start of the line.
  ```
  // @flow
  ...
  ```
5. Run `npm run flow`.
  - You will see flow check output on files you've applied.
