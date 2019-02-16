# Release React Native App
![Alt text](https://user-images.githubusercontent.com/27461460/52886121-a1362580-31b6-11e9-92e5-cd2b68a83330.png)

### Release iOS
1. Build ios bundle
  ```
  react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ./ios/main.jsbundle --assets-dest ./ios
  ```
2. Open up [xcode] in `/ios/*..xcodeproj`
3. Select `Generic iOS Device`.
  ![Alt text](https://user-images.githubusercontent.com/27461460/52886411-916b1100-31b7-11e9-8e74-6ceef0ec6bed.png)
4. [Product] => [Archive]
  ![Alt text](https://user-images.githubusercontent.com/27461460/52886412-916b1100-31b7-11e9-9231-5409cfb64221.png)
5. Distribute your app.

### Release Android
1. Build android bundle
  ```
  react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/main.jsbundle --assets-dest ./android
  ```
2. [Generate signing key](https://facebook.github.io/react-native/docs/signed-apk-android)
3. Open up [Android Studio] by dragging `/android` folder to [Android Studio]
4. Generate Signed Bundle Apk
  ![Alt text](https://user-images.githubusercontent.com/27461460/52887155-19521a80-31ba-11e9-9eb7-b93c4c856bd3.png)
