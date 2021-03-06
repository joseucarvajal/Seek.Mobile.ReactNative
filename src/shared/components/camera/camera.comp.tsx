import React from 'react'
import { Alert, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera';
import Block from '../block/block.comp';
import Text from '../text/text.comp';
import { Colors } from '../../../constants';
import { DrawerActions } from '@react-navigation/native';

export interface IProfileProps {
  onCloseCamera?: any;
  onOpenImagePicker?: any;
}

const ArCamera: React.FC<IProfileProps> = ({
  onCloseCamera,
  onOpenImagePicker
}) => {

  let refCamera: any = React.createRef()

  const [, setHasPermission] = React.useState(false);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = React.useState(Camera.Constants.FlashMode.off);

  const [isTakingPicture, setTakingPicture] = React.useState(false);
  const [isTakingVideo, setTakingVideo] = React.useState(false);

  const [, setCameraReady] = React.useState(false);
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
      await refCamera.takePictureAsync()
        .then((data: any) => {
          onOpenImagePicker && onOpenImagePicker(data)
        });
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
      await refCamera.recordAsync()
        .then((data: any) => {
          onOpenImagePicker && onOpenImagePicker(data)
        });

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
          <Block>
            <TouchableOpacity onPress={toggleCamera}>
              <Ionicons name="md-close" color="white" size={30} />
            </TouchableOpacity>
          </Block>
          <Block>
            <TouchableOpacity onPress={() => {
              setFlashMode(
                flashMode === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              )
            }}>
              <Ionicons
                name={flashMode == Camera.Constants.FlashMode.on ? "ios-flash" : 'ios-flash-off'}
                color={flashMode === Camera.Constants.FlashMode.off ? "white" : Colors.primary}
                size={30}
              />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <Block style={styles.bottomContainer}>
        <Block flex row center middle space='between'>
          <Block>
            <TouchableOpacity onPress={toggleCamera}>
              <Ionicons name={'md-images'} color="white" size={35} />
            </TouchableOpacity>
          </Block>
          <Block>
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
          </Block>
          <Block>
            <TouchableOpacity onPress={() => {
              setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
            }}>
              <Ionicons
                name={type === Camera.Constants.Type.back ? "ios-reverse-camera" : "ios-camera"}
                color={type === Camera.Constants.Type.back ? "white" : Colors.primary}
                size={40}
              />
            </TouchableOpacity>
          </Block>
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