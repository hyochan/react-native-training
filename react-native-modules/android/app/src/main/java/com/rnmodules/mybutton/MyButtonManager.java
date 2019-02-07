//  Created by react-native-create-bridge

package com.rnmodules.mybutton;

import android.support.annotation.Nullable;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

public class MyButtonManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "MyButton";
    private ReactContext reactContext;

    public MyButtonManager(ReactContext reactContext) {
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS;
    }

    @Override
    public View createViewInstance(ThemedReactContext context){
        // Create a view here
        // https://facebook.github.io/react-native/docs/native-components-android.html#2-implement-method-createviewinstance
        final View view = new View(context);
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                WritableMap event = Arguments.createMap();
                event.putString("click", "button");
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(view.getId(), "onMyClick", event);
            }
        });
        return view;
    }

    @Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
            "onMyClick", MapBuilder.of("registrationName", "onMyClick")
        );
    }

    @ReactProp(name = "exampleProp")
    public void setExampleProp(View view, String prop) {
        // Set properties from React onto your native component via a setter method
        // https://facebook.github.io/react-native/docs/native-components-android.html#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation
    }
}
