import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
import { Colors, Images, Layout } from '../../../constants';
import Block from '../block/block.comp'
import Icon from '../icons/icon.comp'
import Text from '../text/text.comp'

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
  home?: boolean;
  item?: any;
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
  cardContent = false,
  home,
  item
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
            {home &&
              <>
                <LinearGradient
                  colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.3)"]}
                  style={[{
                    position:'absolute',
                  }, imageStyles]}
                />
                <Block absolute style={{ bottom: Layout.base, alignSelf: 'center' }}>
                  <Block row>
                    <Text extraLarge bold color={Colors.white}>{item.name} </Text>
                    <Text extraLarge color={Colors.white}>{item.age}</Text>
                  </Block>
                  <Block row center middle>
                    <Text h3 color={Colors.white} style={{ paddingTop: 3 }}>{item.location} </Text>
                    <Block style={styles.titleContainer}>
                      <Text h6 color={Colors.black}>{item.miles} Miles</Text>
                    </Block>
                  </Block>
                </Block>

                <Block absolute padding={Layout.base} center style={{ bottom: 0, left: 0 }}>
                  <Image source={Images.Emoticon} />
                  <Image source={Images.SayHello} />
                </Block>
              </>
            }
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
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  }
});