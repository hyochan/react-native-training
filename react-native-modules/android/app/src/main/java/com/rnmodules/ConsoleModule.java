package com.rnmodules;

import android.os.Handler;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

public class ConsoleModule extends ReactContextBaseJavaModule {
  final private static String TAG = "Console";
  private final ReactApplicationContext reactContext;

  public ConsoleModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return TAG;
  }

  private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
  }

  @ReactMethod
  public void runTimer() {
    final Handler handler = new Handler();
    Runnable runnable = new Runnable() {
      int sec = 0;
      @Override
      public void run() {
        WritableMap obj = Arguments.createMap();
        obj.putString("value", "my val1");
        sendEvent(reactContext, "my_event", obj);
        sec ++;
        if (sec != 10) {
          handler.postDelayed(this, 1000);
        }
      }
    };
    runnable.run();
  }

  @ReactMethod
  public void writeText(String text, final Callback cb) {
    if (text.equals("Error")) {
      cb.invoke("Text is Error.", null);
    } else {
      cb.invoke(null, text);
    }
  }

  @ReactMethod
  public void writeTextWithPromise(String text, Promise promise) {
    if (text.equals("Error")) {
      promise.reject("Error", "Text is Error");
    } else {
      promise.resolve(text);
    }
  }
}
