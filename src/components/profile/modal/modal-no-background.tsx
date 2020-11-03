import React from 'react';
import { StyleSheet } from "react-native";
import { Images, Colors, Layout } from '../../../constants';
import { Block, Modal, Image, Text, Button, LinkButton } from '../../../shared';

interface IModalProps {
  visible?: any
  onVisibleChange?: any
}

const ModalNoBackground: React.FC<IModalProps> = ({
  visible = false,
  onVisibleChange
}) => {

  const [modalVisible, setModalVisible] = React.useState(visible);

  const setVisible = () => {
    setModalVisible(!visible)
    onVisibleChange && onVisibleChange(modalVisible)
  }

  return (
    <Modal visible={visible} backgroundless>
      <Block center middle safe>
        <Image resizeMode="contain" source={Images.Location_2} style={styles.horizontalImage} />
        <Text h3 color={Colors.white}>We prefer to go with Always Allow option for better user experience!</Text>
        <Block safe center>
          <Button
            type='gradient'
            style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
            onPress={() => setVisible()}
          >
            <Text h3 bold center color={Colors.white}>ALWAYS ALLOW</Text>
          </Button>
          <Text />
          <LinkButton
            style={{ top: Layout.base * 3 }}
            onPress={() => setVisible()}
          >
            <Text h3 bold center color={Colors.primary}>Skip now</Text>
          </LinkButton>
        </Block>
      </Block>
    </Modal>
  );
}

export default ModalNoBackground;

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