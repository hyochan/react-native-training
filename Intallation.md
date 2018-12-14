# Install react-native

#### Install Node.js
React-Native requires [nodejs](https://nodejs.org/) and [npm](npmjs.com) installed in your machine.
It's recommeneded to use [nvm](https://github.com/creationix/nvm) to install both `node` and `npm`.

```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Check nvm version by running
```
$ nvm --version
```

You can now install `nodejs` and `npm` via `nvm`.
```
// This will install latest version of node version 10 which is 10.14.2 currently.
$ nvm install 10

// Below command will set default node version for nvm
$ nvm alias default 10.14.2
```

Now check `nodejs` and `npm` version.
```
$ node -v
10.14.2
$ npm -v
6.4.1
```

#### iOS installation
* Install [xcode](https://developer.apple.com/kr/xcode/)


#### Android installation
* Install [java](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
If you are facing "React Native error: “Could not determine java version from '9.0.1'." error message, in `PROJECT_PATH/android/gradle/wrapper/gradle-wrapper.properties`, update `distributionUrl` to `distributionUrl=https\://services.gradle.org/distributions/gradle-5.0-all.zip`.
* Install [android studio](https://developer.android.com/studio/?hl=ko)
Create new android project to make [android avd manager](http://www.androiddocs.com/tools/help/avd-manager.html) available.
Start your `avd manager` then create your android emulator.

#### React Native installation
* Install watchman (Mac & Linux only, Window is currently in beta)
[Watchman](https://facebook.github.io/watchman/) is a tool by Facebook for watching changes in the filesystem. This isn't necessary be installed but it will enhance the performace of your dev env.
  ```
  brew install watchman
  ```
* Install `react-native-cli` as global npm package.
  ```
  npm install -g react-native-cli
  ```
* Create react-native project
  ```
  react-native init [PROJECT_NAME]
  ```
* Run your project
  ```
  $ cd [PROJECT_NAME]
  // run ios
  $ react-native run-ios
  // run android
  $ react-native run-android
  ```
