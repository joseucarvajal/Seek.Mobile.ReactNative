import React from 'react';
import { StyleSheet } from "react-native";
import { Images, Colors, Layout } from '../../../constants';
import { Block, Modal, Image, Text, LinkButton } from '../../../shared';

interface IModalProps {
  visible?: any;
  onVisibleChange?: any
  onPress?: any;
}

const ModalBackground: React.FC<IModalProps> = ({ 
  visible,
  onVisibleChange,
  onPress
}) => {

  const [modalVisible, setModalVisible] = React.useState(visible);

  const setVisible = () => {
    setModalVisible(!visible)
    onVisibleChange && onVisibleChange(modalVisible)
    onPress && onPress()
  }

  return (
    <Modal visible={visible}>
      <Block center middle>
        <Image resizeMode="contain" source={Images.Location_1} style={styles.horizontalImage} />
        <Text h2 bold>Allow SeekQ</Text>
        <Text h3>to access your location</Text>
        <LinkButton
          style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
          onPress={() => setVisible()}
        >
          <Text h3 center color={Colors.option}>Allow While Using App</Text>
        </LinkButton>
        <LinkButton
          style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
          onPress={() => setVisible()}
        >
          <Text h3 center color={Colors.option}>Always Allow</Text>
        </LinkButton>
        <LinkButton
          style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
          onPress={() => setVisible()}
        >
          <Text h3 center color={Colors.option}>Don't Allow</Text>
        </LinkButton>
      </Block>
    </Modal>
  );
}

export default ModalBackground;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: Colors.transparent,
    padding: 10,
    elevation: 2
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 20,
    elevation: 2
  },
  horizontalImage: {
    height: 120,
    width: 'auto'
  }
});