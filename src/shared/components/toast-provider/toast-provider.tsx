import React, { createContext, useState } from 'react';

import { StyleSheet, Animated } from 'react-native';
import Block from '../block/block.comp';
import Text from '../text/text.comp';

export enum ToastType {
  Info = "INFO",
  Error = "ERROR",
  Success = "SUCCESS",
  Base = "BASE",
};

type ToastConfigType = {
  type: ToastType; 
  message: string; 
  duration: number 
};

type ToastContextType = {
  toastConfig: ToastConfigType | null;
  showToast: (type: ToastType, message: string, duration?: number) => void;
  hideToast: () => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC = ({ children }) => {
  // Calls setToastConfig in order to control the toast
  // toastConfig is null by default so the toast is hidden
  const [
    toastConfig,
    setToastConfig,
  ] = useState<ToastConfigType | null>(null);

  function showToast(type: ToastType, message: string, duration = 4000) {
    // Calls setToastConfig to show the toast
    setToastConfig({ type, message, duration });
  }

  function hideToast() {
    // Sets toast config to null in order to hide the toast
    setToastConfig(null);
  }

  return (
    <ToastContext.Provider value={{ toastConfig, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

// interface IToastProps {
//   message: string,
//   color?: string;
// }

// const Toast: React.FC<IToastProps> = ({ 
//   message,
//   color,

// }) => {
//   const animatedValue = new Animated.Value(0);

//   const closeToast = (): void => {
//     setTimeout(() => Animated.timing(
//       animatedValue, { 
//         toValue: 1,
//         duration: 350,
//         useNativeDriver: false 
//       }).start(), 2000)
//   }

//   const callToast = (): void  => {
//     Animated.timing( animatedValue, { 
//         toValue: 0,
//         duration: 350,
//         useNativeDriver: false
//     })
//     .start(closeToast);
//   }

//   return (
//     <Block flex>
//       <Animated.View 
//         style={{ 
//           transform: [{ translateY: animatedValue }], 
//           height: 70, 
//           backgroundColor: color, 
//           position: 'absolute',
//           left:0, 
//           top:0, 
//           right:0, 
//           justifyContent: 'center',
//           zIndex: 1000,
//           opacity: 0.8
//         }}>
//         <Text 
//           style={styles.title}>
//             {message}
//         </Text>
//       </Animated.View>
//     </Block>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     marginLeft: 10, 
//     color: 'white', 
//     fontSize:16,   
//     fontWeight: 'bold'
//   },
// });

// export default Toast;
