import React from 'react'
import { Alert, Image, StyleSheet, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera';
import Block from '../block/block.comp';
import Text from '../text/text.comp';
import { Colors } from '../../../constants';

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
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');
      setHasPermission(hasCameraPermission);
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
    if (isTakingVideo)
      return
    setTakingVideo(false)
    setTakingPicture(true)
    try {
      const data = await refCamera.takePictureAsync()
      console.log("takePicture")
      setTakingPicture(false)
    } catch (e) {
      Alert.alert('Could not take picture')
      console.log(e)
      setTakingPicture(false)
    }
  };

  const handleCaptureOut = () => {
    if (isTakingVideo)
      refCamera.stopRecording()
  };

  const handleLongCapture = async () => {
    if (isTakingPicture)
      return
    setTakingPicture(false)
    setTakingVideo(true)
    try {
      const data = await refCamera.recordAsync()
      console.log("takeVideo")
      setTakingVideo(false)
    } catch (e) {
      Alert.alert('Could not take video')
      console.log(e)
      setTakingVideo(false)
    }
  };

  return (
    <Block flex>
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
        <Block flex row center middle space='between'>
          <TouchableOpacity onPress={toggleCamera}>
            <Ionicons name="md-close" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setFlashMode(
              flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
            )
          }}>
            <Ionicons name={flashMode == Camera.Constants.FlashMode.on ? "md-flash" : 'md-flash-off'} color="white" size={30} />
          </TouchableOpacity>
        </Block>
      </Block>
      <Block style={styles.bottomContainer}>
        <Block flex row center middle space='between'>
          <TouchableOpacity onPress={toggleCamera}>
            <Ionicons name={'md-images'} color="white" size={35} />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPressIn={() => setTakingVideo(true)}
            onPressOut={handleCaptureOut}
            onLongPress={handleLongCapture}
            onPress={handleShortCapture}>
            <Block middle center>
              <Block style={[styles.captureBtn, isTakingVideo && styles.captureBtnActive]}>
                {isTakingVideo && <Block style={styles.captureBtnInternal} />}
              </Block>
              <Block paddingTop={10}>
                <Text extraSmall book color={Colors.white}>Hold for video, tap for photo</Text>
              </Block>
            </Block>
          </TouchableWithoutFeedback>

          <TouchableOpacity onPress={() => {
            setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
          }}>
            <Ionicons name="md-reverse-camera" color="white" size={35} />
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default ArCamera;

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    padding: 20,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    padding: 30,
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