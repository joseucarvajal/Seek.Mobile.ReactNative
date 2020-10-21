import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Colors, FontNames, Layout } from '../../../constants';
import Block from '../block/block.comp'
import Icon from '../icons/icon.comp'
import Text from '../text/text.comp'

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
  titleStyle
}) => {

  const imageStyles = [full ? styles.fullImage : styles.horizontalImage, imageStyle];
  const titleStyles = [styles.cardTitle, titleStyle];
  const cardContainer = [styles.card, styles.shadow, style];
  const imgContainer = [
    styles.imageContainer,
    horizontal ? styles.horizontalStyles : styles.verticalStyles,
    styles.shadow
  ];

  return (
    <Block row={horizontal} card flex style={cardContainer}>
      <TouchableWithoutFeedback onPress={() => console.log("")}>
        <Block flex style={imgContainer}>
          <Block right>
            <Icon name={icon} size={iconSize} color={iconColor} style={[{ position: 'absolute', zIndex: 1, top: Layout.base, right: Layout.base }]} />
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
    minHeight: 114,
    marginBottom: 4
  },
  cardTitle: {
    paddingHorizontal: 9,
    paddingTop: 7,
    paddingBottom: 15
  },
  cardDescription: {
    padding: Layout.base / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden'
  },
  image: {
    borderRadius: 3,
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