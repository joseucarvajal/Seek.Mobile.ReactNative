import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Colors, Layout } from '../../../constants';
import Block from '../block/block.comp'
import Icon from '../icons/icon.comp'

export interface ICardProps {
  navigation?: any;
  item?: any;
  icon: any;
  iconSize: any;
  iconColor: any;
  horizontal?: any;
  full?: any;
  style?: any;
  ctaColor?: any;
  imageStyle?: any;
  ctaRight?: any;
  titleStyle?: any;
  onPress?: any;
}

const Card: React.FC<ICardProps> = ({
  navigation,
  item,
  icon,
  iconSize,
  iconColor,
  horizontal,
  full,
  style,
  ctaColor,
  imageStyle,
  ctaRight,
  titleStyle,
  onPress
}) => {

  const imageStyles = [full ? styles.fullImage : styles.horizontalImage, imageStyle];
  const cardContainer = [styles.card, styles.shadow, style];
  const imgContainer = [
    imageStyles,
    styles.imageContainer,
    horizontal ? styles.horizontalStyles : styles.verticalStyles,
    styles.shadow
  ];

  return (
    <Block row={horizontal} card flex style={cardContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Block flex style={imgContainer}>
          <Block right>
            <Icon family='seekQ' name={icon} size={iconSize} color={iconColor} style={[{ position: 'absolute', zIndex: 1, top: Layout.base, right: Layout.base }]} />
          </Block>
          <Block center>
            <Image resizeMode="contain" source={item.image} style={imageStyles} />
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.upload,
    marginVertical: Layout.base,
    borderWidth: 0,
    minHeight: 330
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden'
  },
  horizontalImage: {
    height: 122,
    width: 'auto'
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 330
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  }
});