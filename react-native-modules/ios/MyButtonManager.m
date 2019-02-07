//  Created by react-native-create-bridge

#import <Foundation/Foundation.h>
#import "MyButton.h"
#import "MyButtonManager.h"

// import RCTBridge
#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h” // Required when used as a Pod in a Swift project
#endif

@implementation MyButtonManager

@synthesize bridge = _bridge;

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html
RCT_EXPORT_MODULE();

// Return the native view that represents your React component
- (UIView *)view
{
  return [[MyButton alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

RCT_EXPORT_VIEW_PROPERTY(exampleProp, NSString)
RCT_EXPORT_VIEW_PROPERTY(onMyClick, RCTBubblingEventBlock)

// Export constants
// https://facebook.github.io/react-native/releases/next/docs/native-modules-ios.html#exporting-constants
- (NSDictionary *)constantsToExport
{
  return @{
           @"EXAMPLE": @"example"
         };
}

@end
