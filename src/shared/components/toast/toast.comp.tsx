import React from "react";
import { Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../../constants";
import { useToast } from '../../../hooks/toast/useToast';
import Block from '../block/block.comp';
import Text from '../text/text.comp';
import { ToastType } from "../toast-provider/toast-provider";

const fadeDuration = 80;
const tabBarHeight = 60;
const animatedValue = new Animated.Value(0);

interface IToast {}

const Toast: React.FC<IToast> = () => {
  const insets = useSafeAreaInsets();
  const { toastConfig, hideToast } = useToast();
  const opacity = React.useRef(new Animated.Value(0)).current;

  const fadeIn = React.useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: fadeDuration,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  const fadeOut = React.useCallback(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: fadeDuration,
      useNativeDriver: true,
    }).start(() => {
      hideToast();
    });
  }, [opacity, hideToast]);

  React.useEffect(() => {
    if (!toastConfig) {
      return;
    }

    fadeIn();
    const timer = setTimeout(fadeOut, toastConfig.duration);

    return () => clearTimeout(timer);
  }, [toastConfig, fadeIn, fadeOut]);

  if (!toastConfig) {
    return null;
  }

  const { type, message } = toastConfig;

  let backgroundColor;
  switch (type) {
    case ToastType.Info:
      backgroundColor = 'blue';
      break;
    case ToastType.Error:
      backgroundColor = 'red';
      break;
    case ToastType.Success:
      backgroundColor = 'green';
      break;
    case ToastType.Base:
      backgroundColor = Colors.toastColor;
      break;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        //styles.animated
        { top: insets.top + tabBarHeight, opacity, right: 0, justifyContent: 'flex-end' }, // , transform: [{ translateY: animatedValue }]
      ]}
    >
      <Block style={[styles.toast, { backgroundColor }]}>
        <Text style={styles.message}>{message}</Text>
      </Block>
    </Animated.View>
  );
}

export default Toast;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    position: "absolute",
    //marginHorizontal: 20,
    maxWidth: 480,
    zIndex: 9000,
  },
  toast: {
    borderRadius: 6,
    padding: 16,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.messageToast,
  },
  animated: {
    height: 70,
    position: 'absolute',
    left: 0, 
    top: 0, 
    right: 0, 
    justifyContent: 'center',
    zIndex: 1000,
    opacity: 0.8
  }
});
