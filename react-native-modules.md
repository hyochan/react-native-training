# React Native Modules
![Alt text](https://github.com/dooboolab/react-native-training/blob/master/images/rnmodules.png)
1. Implement `Native Modules` in each platform(ios, android).
2. Call your `Native Modules` you've implemented.
   - You can also send events from `Native Modules`.

### iOS
- [Native Module](https://facebook.github.io/react-native/docs/native-modules-ios)
  + Create new `Cocoa Touch Class`. This will create two files(.h, .m).
  + Import RCTBridgeModule in `header` file.
    ```
    #import <React/RCTBridgeModule.h>
    @interface Console : NSObject <RCTBridgeModule>
    ```
  + Export RCT Module.
    ```
    RCT_EXPORT_MODULE();
    ```
  + Implement methods.
    - Callback
      ```
      RCT_EXPORT_METHOD(writeText:(NSString *)text callback: (RCTResponseSenderBlock)callback) {
        if([text isEqualToString:@"Error"]) {
          callback(@[@"Text is Error.", [NSNull null]]);
        } else {
          callback(@[[NSNull null], text]);
        }
      }
      ```
    - Promise
      ```
      RCT_EXPORT_METHOD(writeTextWithPromise:(NSString *)text resolve:(RCTPromiseResolveBlock)resolve
                        reject:(RCTPromiseRejectBlock)reject) {
        if([text isEqualToString:@"Error"]) {
          reject(@"Console", @"Text is Error.", nil);
        } else {
          resolve(text);
        }
      }
      ```
  + Sending events from native module.
    - Import RCT Emitter.
      ```
      #import <React/RCTEventEmitter.h>
      @interface Console : RCTEventEmitter <RCTBridgeModule>
      ```
    - Add event names.
      ```
      - (NSArray<NSString *> *)supportedEvents
      {
        return @[@"my_event"];
      }
      ```
    - Send event from where you want.
      ```
      [self sendEventWithName:@"my_event" body:json];
      ```
    - In javascript file, import `NativeEventEmitter` from `react-native` and add below.
      ```
      const { Console: RNConsole } = NativeModules;
      const emitter = new NativeEventEmitter(RNConsole);
      ```
    - Add subscription in `js`.
      ```
      const subscription = emitter.addListener(
        'my_event',
        (evt) => console.log('event', evt)
      );
      ```
- [Native Module UI](https://facebook.github.io/react-native/docs/native-components-ios)
  + `react-native new-module`
    - Select Module Name (ex: MyButton)
    - Select Native UI
  + Above will create native UI instantly.
  + To add component event add below in `MyButton.h`.
    ```
    @property (nonatomic, copy) RCTBubblingEventBlock onMyClick;
    ```
  + Then in `MyButton.m` you can call it.
    ```
    self.onMyClick(@{
                   @"value": @"clicked"
                   });
    ```
  + Don't forget to `EXPORT_VIEW_PROPERTY` in `MyButtonManager.h`
    ```
    RCT_EXPORT_VIEW_PROPERTY(onMyClick, RCTBubblingEventBlock)
    ```

### Android
- [Native Module](https://facebook.github.io/react-native/docs/native-modules-android)
  + Add package.
    ```
    public class MyPackage implements ReactPackage {
        @Override
        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
            return Arrays.<NativeModule>asList(new MyModule(reactContext));
        }

        @Override
        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
            return Collections.emptyList();
        }
    }
    ```
  + Add module.
    ```
    public class MyModule extends ReactContextBaseJavaModule {
        final private static String TAG = "MyModule";
        private final ReactApplicationContext reactContext;

        public MyModule(ReactApplicationContext reactContext) {
            super(reactContext);
            this.reactContext = reactContext;
        }
    }
    ```
  + Add package to `MainApplication.java`.
    ```
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new MyPackage()
      );
    }
    ```
  + Implement methods.
    - Callback
      ```
      @ReactMethod
      public void myMethod(String text, final Callback cb) {
        if (text.equals("Error")) {
          cb.invoke("Text is Error.", null);
        } else {
          cb.invoke(null, text);
        }
      }
      ```
    - Promise
      ```
      @ReactMethod
      public void myMethod(String text, Promise promise) {
        if (text.equals("Error")) {
          promise.reject("ERROR", "Text is Error.");
        } else {
          promise.resolve(text);
        }
      }
      ```
  + Sending events from native module.
    ```
    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
      reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
    }

    sendEvent(reactContext, "my_event", json);
    ```
- [Native Module UI](https://facebook.github.io/react-native/docs/native-modules-android)

## Creating Native Module Helper
- [React Native Create Bridge](https://github.com/peggyrayzis/react-native-create-bridge)
- [React Native Create Library](https://github.com/frostney/react-native-create-library)
