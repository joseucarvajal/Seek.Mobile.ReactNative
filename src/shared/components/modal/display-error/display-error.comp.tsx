import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../../constants';
import { Block, Modal, Text, Button, IError } from '../../../index';

const DisplayError: React.FC<IError> = ({
  visible,
  title = 'Error',
  onVisibleChange
}) => {
  const [modalVisible, setModalVisible] = useState(visible);

  const setVisible = () => {
    setModalVisible(!visible)
    onVisibleChange && onVisibleChange(!modalVisible)
  }

  return (
    <Modal visible={visible}>
      <Block center middle>
        <Text h3 color={Colors.black}>{title}</Text>
        <Block safe center>
        <Button
            type='text-link'
            style={{ ...styles.openButton, top: Layout.base * 3 }}
            onPress={() => setVisible()}
          >
            <Text h3 bold center color={Colors.primary}>Close</Text>
          </Button>
        </Block>
      </Block>
    </Modal>
  );
}

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: Colors.transparent,
    padding: 10,
    elevation: 2
  },
});

export default DisplayError;
