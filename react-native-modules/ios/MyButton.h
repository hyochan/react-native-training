//  Created by react-native-create-bridge

// import UIKit so you can subclass off UIView
#import <UIKit/UIKit.h>
#import <React/RCTBridge.h>
#import <React/RCTViewManager.h>

@class RCTEventDispatcher;

@interface MyButton : UIView
  // Define view properties here with @property
  @property (nonatomic, assign) NSString *exampleProp;
  @property (nonatomic, copy) RCTBubblingEventBlock onMyClick;

  // Initializing with the event dispatcher allows us to communicate with JS
  - (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
