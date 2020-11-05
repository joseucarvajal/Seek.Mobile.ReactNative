import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Block from '../block/block.comp';
import { Colors, Layout } from '../../../constants';
import Input from '../text-input/text-input.comp';

export interface IProfileProps {
  data?: any;
  onClose?: any;
}

const UploadPhoto: React.FC<IProfileProps> = ({
  data,
  onClose
}) => {

  const close = () => onClose && onClose(null)
  const sendData = () => onClose && onClose(data)

  return (
    <Block flex>
      <StatusBar hidden={true} />
      {data && <Image
        source={{ uri: data.uri }}
        resizeMode='stretch'
        style={{ width: Layout.window.width, height: '100%' }}
      />}
      <Block style={styles.topContainer}>
        <Block flex row center middle space='between'>
          <Block>
            <TouchableOpacity onPress={close}>
              <Ionicons name="md-close" color="white" size={30} />
            </TouchableOpacity>
          </Block>
          <Block>
            <TouchableOpacity onPress={() => { }}>
              <MaterialIcons name={'insert-emoticon'} color="white" size={30} />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
      <Block style={styles.bottomContainer}>
        <Block flex row center middle space='between'>
          <TouchableOpacity onPress={() => { }}>
            <Block center middle backgroundColor={Colors.muted} style={styles.sendButton}>
              <MaterialIcons name="add-box" color="white" size={25} />
            </Block>
          </TouchableOpacity>
          <Block flex paddingLeft={Layout.base} paddingRight={Layout.base}>
            <Input placeholder='Add a caption' color='apple' textInputStyle={{ paddingLeft: 10, fontSize: 16 }} bgColor='white' style={styles.textBox} />
          </Block>
          <TouchableOpacity onPress={sendData}>
            <Block center middle backgroundColor={Colors.send} style={styles.sendButton}>
              <Ionicons name="md-send" color="white" size={25} style={{ paddingLeft: 5 }} />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default UploadPhoto;

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
  },
  sendButton: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "transparent",
  },
  textBox: {
    width: 'auto',
    height: 35,
    borderRadius: 20,
    borderWidth: 0
  }
});