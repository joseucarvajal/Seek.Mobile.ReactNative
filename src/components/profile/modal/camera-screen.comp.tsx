import React from 'react';
import { Modal } from "react-native";
import { Camera } from '../../../shared';

interface IModalProps {
  visible?: any;
  onCloseCamera?: any;
}

const CameraScreen: React.FC<IModalProps> = ({
  visible,
  onCloseCamera
}) => {

  const [modalVisible, setModalVisible] = React.useState(visible);

  const setVisible = () => {
    setModalVisible(!modalVisible)
    onCloseCamera && onCloseCamera(false)
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <Camera onCloseCamera={() => setVisible()} />
    </Modal>
  );
}

export default CameraScreen;