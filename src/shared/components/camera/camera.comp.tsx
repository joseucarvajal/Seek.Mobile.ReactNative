import React from 'react'
import { Alert, Image, StyleSheet, Text, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera';
import Block from '../block/block.comp';

export interface IProfileProps {
  onCloseCamera?: any
}

const ArCamera: React.FC<IProfileProps> = ({
  onCloseCamera
}) => {

  let refCamera: any = React.createRef()

  const [hasPermission, setHasPermission] = React.useState(false);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = React.useState(Camera.Constants.FlashMode.off);

  const [isTakingPicture, setTakingPicture] = React.useState(false);
  const [isTakingVideo, setTakingVideo] = React.useState(false);

  const [isCameraReady, setCameraReady] = React.useState(false);
  const [isCameraShown, setCameraShown] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraRef = (ref: any) => {
    refCamera = ref;
  };

  const handleCameraReady = () => {
    setCameraReady(true)
  };

  const toggleCamera = () => {
    if (isCameraShown) {
      setCameraShown(false)
      setCameraReady(false)
      onCloseCamera && onCloseCamera()
      refCamera = null
    } else {
      setCameraShown(true)
    }
  }

  const handleShortCapture = async () => {
    setTakingPicture(true)
    try {
      const data = await refCamera.takePictureAsync()
      console.log("takePicture")
      setTakingPicture(false)
    } catch (e) {
      Alert.alert('Could not take picture')
      console.log("Could not take picture")
      setTakingPicture(false)
    }
  };

  const handleCaptureOut = () => {
    if (isTakingVideo)
      refCamera.stopRecording()
  };

  const handleLongCapture = async () => {
    setTakingVideo(true)
    try {
      const data = await refCamera.recordAsync()
      console.log("takeVideo")
      setTakingVideo(false)
    } catch (e) {
      Alert.alert('Could not take video')
      console.log("Could not take video")
      setTakingVideo(false)
    }
  };

  return (
    <Block style={styles.container}>
      <StatusBar hidden={true} />
      {isCameraShown && (
        <Camera
          ref={handleCameraRef}
          type={type}
          flashMode={flashMode}
          onCameraReady={handleCameraReady}
          style={StyleSheet.absoluteFill}
        />
      )}
      <Block style={styles.topContainer}>
        <Block style={styles.alignCenter}>
          <TouchableOpacity onPress={toggleCamera}>
            <Ionicons
              name="md-close"
              color="white"
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setFlashMode(
              flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
            )
          }}>
            <Ionicons
              name={flashMode == Camera.Constants.FlashMode.on ? "md-flash" : 'md-flash-off'}
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block style={styles.buttonContainer}>
        <Block style={styles.alignCenter}>
          <TouchableOpacity onPress={toggleCamera}>
            <Ionicons
              name={'md-images'}
              color="white"
              size={35}
            />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPressIn={() => setTakingVideo(false)}
            onPressOut={handleCaptureOut}
            onLongPress={handleLongCapture}
            onPress={handleShortCapture}>
            <Block style={[styles.captureBtn, isTakingVideo && styles.captureBtnActive]}>
              {isTakingVideo && <Block style={styles.captureBtnInternal} />}
            </Block>
          </TouchableWithoutFeedback>
          <TouchableOpacity onPress={() => {
            setFlashMode(
              flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
            );
          }}>
            <Ionicons
              name="md-reverse-camera"
              color="white"
              size={35}
            />
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default ArCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    padding: 10,
    color: 'red'
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: "#FFFFFF",
  },
  captureBtnActive: {
    width: 80,
    height: 80,
  },
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: "red",
    borderColor: "transparent",
  }
});