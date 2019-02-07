//  Created by react-native-create-bridge
#import <Foundation/Foundation.h>
#import "MyButton.h"

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif


@implementation MyButton : UIView  {

  RCTEventDispatcher *_eventDispatcher;
  
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init])) {
    _eventDispatcher = eventDispatcher;
  }

  UITapGestureRecognizer *singleFingerTap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(handleSingleTap:)];
  [self addGestureRecognizer:singleFingerTap];
  return self;
}

- (void)handleSingleTap: (UITapGestureRecognizer *) recognizer{
  NSLog(@"Clicked");
  self.onMyClick(@{
                   @"value": @"clicked"
                   });
}

@end
