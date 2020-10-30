import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image, ImageProps } from 'react-native'
import { Colors, Layout } from '../../../constants';
import Block from '../block/block.comp'
import Icon from '../icons/icon.comp'

export interface ICardProps {
  source?: any;
  icon?: any;
  iconSize?: any;
  iconColor?: any;
  horizontal?: any;
  full?: any;
  style?: any;
  imageStyle?: any;
  onPress?: any;
  shadow?: boolean;
  shadowImage?: boolean;
  shadowIcon?: boolean;
  borderless?: boolean
}

const Card: React.FC<ICardProps> = ({
  source,
  icon,
  iconSize,
  iconColor,
  horizontal,
  full,
  style,
  imageStyle,
  onPress,
  shadow,
  shadowImage,
  shadowIcon,
  borderless
}) => {

  const imageStyles = [
    full && styles.fullImage,
    horizontal && styles.horizontalImage, 
    imageStyle
  ];
  
  const cardContainer = [
    styles.card, 
    shadow && styles.shadow, 
    style
  ];
  
  const imgContainer = [
    imageStyles,
    styles.imageContainer,
    horizontal ? styles.horizontalStyles : styles.verticalStyles,
    shadowImage && styles.shadow
  ];
  
  const iconStyle = [ 
    full && styles.iconFullStyle,
    horizontal && styles.iconHorizontalStyle,
    shadowIcon && styles.shadow
  ]

  return (
    <Block row={horizontal} card={!borderless} flex style={cardContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Block flex style={imgContainer}>
          <Block flex order={1} fluid right style={iconStyle}>
            <Icon family='seekQ' name={icon} size={iconSize} color={iconColor} style={styles.absoluteImage} />
          </Block>
          <Block center middle>
            <Image resizeMode={full ? "contain" : "cover"} source={source} style={imageStyles} />
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
    borderWidth: 0,
    minHeight: 330
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden'
  },
  horizontalImage: {
    width: Layout.window.width,
    height: '100%'
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
  },
  iconFullStyle: { 
    top: Layout.base, 
    right: Layout.base 
  },
  iconHorizontalStyle: { 
    top: Layout.base * 3, 
    right: Layout.base 
  },
  absoluteImage: {
    position: 'absolute'
  }
});