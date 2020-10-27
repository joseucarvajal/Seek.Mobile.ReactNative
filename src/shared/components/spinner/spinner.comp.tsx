import React from 'react';
import { StyleSheet, Modal, ActivityIndicator } from 'react-native';
import { Colors } from '../../../constants';
import Text from '../text/text.comp'
import Block from '../block/block.comp'

export type AnimationType = 'none' | 'slide' | 'fade'
export type SizeType = 'small' | 'large'

interface ISpinnerProps {
  cancelable?: boolean,
  color?: string,
  animation?: AnimationType,
  size?: SizeType,
  overlayColor?: string,
  textContent?: string,
  textStyle?: object,
  visible?: boolean,
  indicatorStyle?: object,
  customIndicator?: any,
  children?: any,
  spinnerKey?: string
}

const Spinner: React.FC<ISpinnerProps> = ({
  textStyle,
  indicatorStyle,
  customIndicator,
  children,
  spinnerKey,
  visible = false,
  cancelable = false,
  textContent = '',
  animation = 'none',
  color = 'white',
  size = 'large',
  overlayColor = 'rgba(0, 0, 0, 0.25)'
}) => {

  const [isVisible, setActive] = React.useState(visible);

  const close = () => setActive(false)

  const handleOnRequestClose = () => cancelable && close()

  const renderDefaultContent = () => {
    return (
      <Block style={styles.background}>
        {customIndicator ? (
          customIndicator
        ) : (
            <ActivityIndicator
              color={color}
              size={size}
              style={[styles.activityIndicator, indicatorStyle ? indicatorStyle : styles.indicatorStyle]}
            />
          )}
        <Block style={[styles.textContainer]}>
          <Text style={[styles.textContent, textStyle ? textStyle : styles.defaultTextStyle]}>
            {textContent}
          </Text>
        </Block>
      </Block>
    );
  }

  const renderSpinner = () => {
    const spinner = (
      <Block style={[styles.container, { backgroundColor: overlayColor }]} key={spinnerKey ? spinnerKey : `spinner_${Date.now()}`}>
        {children ? children : renderDefaultContent()}
      </Block>
    );

    return (
      <Modal
        animationType={animation}
        onRequestClose={() => handleOnRequestClose()}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={visible}
      >
        {spinner}
      </Modal>
    );
  }

  return renderSpinner();
}

export default Spinner

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1
  },
  background: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    backgroundColor: Colors.transparent,
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  textContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  textContent: {
    fontSize: 20,
    height: 50,
    top: 80
  },
  indicatorStyle: {
    flex: 1,
    width: 170,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 14
  },
  defaultTextStyle: {
    color: '#FFF',
    marginBottom: 60
  }
});