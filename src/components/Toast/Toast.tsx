import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

import {ToastContent} from './components/ToastContent';

import {ToastPosition} from '#/services/toast/ToastTypes';
import {useToast, useToastService} from '#/services/toast/useToast';

const DEFAULT_DURATION = 3000;

export function Toast() {
  const {toast} = useToast();
  const {hideToast} = useToastService();

  const toastPosition: ToastPosition = toast?.position || 'bottom';

  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnimation],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();

      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast?.duration || DEFAULT_DURATION);
    }
  }, [toast, hideToast, runEnteringAnimation, runExitingAnimation]);

  const animatedViewStyle: ViewStyle = {
    position: 'absolute',
    alignSelf: 'center',
    [toastPosition]: 24,
    opacity: fadeAnimation,
  };

  if (!toast) {
    return null;
  }

  return (
    <Animated.View style={animatedViewStyle}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
