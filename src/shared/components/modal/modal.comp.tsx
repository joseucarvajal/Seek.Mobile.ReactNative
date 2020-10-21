import React, { useState } from "react";
import { Alert, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Images, Layout } from "../../../constants";
import Block from "../block/block.comp";
import Text from "../text/text.comp";
import Button from "../button/button.comp";
import Image from "../image/image.comp";

export interface IArModalProps {
  backgroundless?: any;
}

const ArModal: React.FC<IArModalProps> = ({
  backgroundless
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  function renderModal() {
    return (
      <Block center middle style={styles.modalView}>
        <Image resizeMode="contain" source={Images.Location_1} style={styles.horizontalImage} />
        <Text h2 bold>Allow SeekQ</Text>
        <Text h2>to access your location</Text>
        <Button
          type='text-link'
          style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text h5 center color={Colors.option}>Allow While Using App</Text>
        </Button>
        <Button
          type='text-link'
          style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text h5 center color={Colors.option}>Always Allow</Text>
        </Button>
        <Button
          type='text-link'
          style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text h5 center color={Colors.option}>Don't Allow</Text>
        </Button>
      </Block>
    );
  }

  function renderModalWithoutBackground() {
    return (
      <Block center middle safe>
        <Image resizeMode="contain" source={Images.Location_2} style={styles.horizontalImage} />
        <Text h5 color={Colors.white}>We prefer to go with Always Allow option for better user experience!</Text>
        <Block safe center>
          <Button
            type='gradient'
            style={{ ...styles.openButton, backgroundColor: Colors.transparent, top: Layout.base }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text h5 bold center color={Colors.white}>ALWAYS ALLOW</Text>
          </Button>
          <Text />
          <Button
            type='text-link'
            style={{ top: Layout.base * 3 }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text h5 bold center color={Colors.primary}>Skip now</Text>
          </Button>
        </Block>
      </Block>
    );
  }

  return (
    <Block flex center>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { Alert.alert("Modal has been closed."); }}
      >
        <Block flex middle style={{ backgroundColor: Colors.modal }}>
          {backgroundless ? renderModalWithoutBackground() : renderModal()}
        </Block>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text h3 bold color={Colors.white}>Show Modal</Text>
      </TouchableOpacity>
    </Block>
  );
}

export default ArModal;

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
