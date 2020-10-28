import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../../constants";
import Block from "../../block/block.comp";
import Text from "../../text/text.comp";
import Modal from "../../modal/modal.comp";
import Button from "../../button/button.comp";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinkButton } from "../../..";

interface IDisplayErrorProps {
  message: string;
  visible: any;
  onClose?: () => void;
}

const DisplayError: React.FC<IDisplayErrorProps> = ({
  message,
  visible,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    setShowModal(visible ? true : false);
  }, [visible]);

  return (
    <Modal visible={showModal}>
      <Block center middle>
        <Text h3 color={Colors.black}>
          {message}
        </Text>
        <Block safe center>
          <LinkButton
            onPress={() => {
              console.log("visible to false");
              setShowModal(false);
              if (onClose && typeof onClose === "function") {
                onClose();
              }
            }}
          >
            Close
          </LinkButton>
        </Block>
      </Block>
    </Modal>
  );
};

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: Colors.transparent,
    padding: 10,
    elevation: 2,
  },
});

export default DisplayError;
