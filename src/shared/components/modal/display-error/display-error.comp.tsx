import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../../constants";
import Block from "../../block/block.comp";
import Text from "../../text/text.comp";
import Modal from "../../modal/modal.comp";
import LinkButton from "../../link-button/link-button.comp";
import { IErrorResponse } from "../../..";

export interface IDisplayErrorProps {
  errorResponse?: IErrorResponse | null;
  message?: string;
  visible?: any;
  onClose?: () => void;
}

const DisplayError: React.FC<IDisplayErrorProps> = ({
  errorResponse,
  message,
  visible,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    const displayModal = visible || errorResponse ? true : false;
    console.log({ displayModal });
    setShowModal(displayModal);
  }, [visible, errorResponse]);

  return (
    <Modal visible={showModal}>
      <Block center middle space='between'>
        <Text h3 color={Colors.black}>
          {errorResponse ?
            errorResponse?.response?.data?.Title
            : message ? message : 'There was an error'}
        </Text>
        <Block style={{ top: Layout.base }}>
          <LinkButton
            underline
            onPress={() => {
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

export default DisplayError;