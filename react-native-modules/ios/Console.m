//
//  Console.m
//  ReactNativeModules
//
//  Created by dooboolab on 04/02/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "Console.h"
#import <React/RCTLog.h>

@implementation Console {
  NSTimer* timer;
}

int sec = 0;

-(void) timerHandler:(NSTimer*) timer {
  sec ++;
  RCTLogInfo(@"sec :: %d", sec);
  [self sendEventWithName:@"my_event" body:@"send event"];
  if (sec == 10) {
    [self->timer invalidate];
  }
}

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"my_event"];
}

RCT_EXPORT_METHOD(runTimer) {
  sec = 0;
  RCTLogInfo(@"runTimer");
  dispatch_async(dispatch_get_main_queue(), ^{
    self->timer = [NSTimer scheduledTimerWithTimeInterval:1
                                                   target:self
                                                 selector:@selector(timerHandler:)
                                                 userInfo:nil
                                                  repeats:YES];
  });
}

RCT_EXPORT_METHOD(writeText:(NSString *)text callback: (RCTResponseSenderBlock)callback) {
  if([text isEqualToString:@"Error"]) {
    callback(@[@"Text is Error.", [NSNull null]]);
  } else {
    callback(@[[NSNull null], text]);
  }
}

RCT_EXPORT_METHOD(writeTextWithPromise:(NSString *)text resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
  if([text isEqualToString:@"Error"]) {
    reject(@"Console", @"Text is Error.", nil);
  } else {
    resolve(text);
  }
}

@end
