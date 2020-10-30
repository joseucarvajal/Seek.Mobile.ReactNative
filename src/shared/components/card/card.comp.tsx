import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
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
  borderless?: boolean;
  topLeftBorder?: boolean;
  color?: string;
  cardContent?: any;
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
  borderless,
  topLeftBorder,
  color,
  cardContent = false
}) => {

  const imageStyles = [
    full && styles.fullImage,
    horizontal && styles.horizontalImage,
    imageStyle
  ];

  const cardContainer = [
    styles.card,
    color && { backgroundColor: color },
    shadow && styles.shadow,
    topLeftBorder && styles.topLeftBorderStyles,
    style
  ];

  const imgContainer = [
    imageStyles,
    styles.imageContainer,
    horizontal && styles.horizontalStyles,
    topLeftBorder && styles.topLeftBorderStyles,
    shadowImage && styles.shadow
  ];

  const iconStyle = [
    full && styles.iconFullStyle,
    horizontal && styles.iconHorizontalStyle,
    shadowIcon && styles.shadow
  ]

  const renderContentCard = () => {
    if (cardContent)
      return (
        <Block>
          {cardContent}
        </Block>
      )
    else
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          <Block center middle>
            <Image resizeMode={full ? "contain" : "cover"} source={source} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
      )
  }

  const renderIcon = () => {
    return (
      <Block flex order={1} fluid right style={iconStyle}>
        <Icon family='seekQ' name={icon} size={iconSize} color={iconColor} style={styles.absoluteImage} />
      </Block>
    )
  }

  return (
    <Block flex row={horizontal} card={!borderless} style={cardContainer}>
      <Block flex style={imgContainer}>
        {icon && renderIcon()}
        {renderContentCard()}
      </Block>
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
  topLeftBorderStyles: {
    borderRadius: 0,
    borderTopLeftRadius: 20
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