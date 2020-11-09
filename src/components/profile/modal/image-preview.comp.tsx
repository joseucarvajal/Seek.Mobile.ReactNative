import React from 'react';
import { Modal } from "react-native";
import { ImagePreviwer } from '../../../shared';

interface IModalProps {
  data?: any;
  visible?: any;
  onClose?: any;
}

const ImagePreviwerScreen: React.FC<IModalProps> = ({
  data,
  visible,
  onClose
}) => {

  const close = (data: any) => onClose && onClose(data)

  return (
    <Modal animationType="fade" visible={visible}>
      <ImagePreviwer onClose={(data: any) => close(data)} data={data} />
    </Modal>
  );
}

export default ImagePreviwerScreen;