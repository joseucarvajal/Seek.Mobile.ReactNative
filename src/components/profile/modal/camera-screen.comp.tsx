import React from 'react';
import { Modal } from "react-native";
import { Camera } from '../../../shared';
import ImagePreviwer from './image-preview.comp'

interface IModalProps {
  visible?: any;
  onCloseCamera?: any;
}

const CameraScreen: React.FC<IModalProps> = ({
  visible,
  onCloseCamera
}) => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [data, setCameraData] = React.useState(null);

  const closeCamera = () => onCloseCamera && onCloseCamera(data)

  const setVisible = (data: any) => {
    setModalVisible(true)
    setCameraData(data)
  }

  const setData = (data: any) => {
    setModalVisible(false)
    setCameraData(data)
    data && closeCamera()
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <Camera onCloseCamera={() => closeCamera()} onOpenImagePicker={(data:any) => setVisible(data)}/>
      <ImagePreviwer visible={modalVisible} data={data} onClose={(data: any) => setData(data)}/>
    </Modal>
  );
}

export default CameraScreen;