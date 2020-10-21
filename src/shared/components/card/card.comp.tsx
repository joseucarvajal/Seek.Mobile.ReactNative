import React from 'react';
import { StyleSheet } from 'react-native'
import { Colors, FontNames, Layout } from '../../../constants';
import Block from '../block/block.comp'

export interface ICardProps {
  avatar?: any;
  borderless?: any;
  caption?: any;
  captionColor?: any;
  card?: any;
  children?: any;
  footerStyle?: any;
  image?: any;
  imageBlockStyle?: any;
  imageStyle?: any;
  location?: any;
  locationColor?: any;
  shadow?: any;
  style?: any;
  styles?: any;
  title?: any;
  titleColor?: any;
  theme?: any;
  props?: any;
}

const Card: React.FC<ICardProps> = ({
  avatar,
  borderless,
  caption,
  captionColor,
  card,
  children,
  footerStyle,
  image,
  imageBlockStyle,
  imageStyle,
  location,
  locationColor,
  shadow,
  style,
  styles,
  title,
  titleColor,
  theme,
  ...props
}) => {
  return (
    <div>

    </div>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    backgroundColor: Colors.white,
    width: Layout.card_width,
    marginVertical: Layout.card_margin_vertical,
  },
  footer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Layout.card_footer_horizontal,
    paddingVertical: Layout.card_footer_vertical,
    backgroundColor: Colors.transparent,
    zIndex: 1,
  },
  avatar: {
    width: Layout.card_avatar_width,
    height: Layout.card_avatar_height,
    borderRadius: Layout.card_avatar_radius,
  },
  title: {
    justifyContent: 'center',
  },
  imageBlock: {
    borderWidth: 0,
    overflow: 'hidden',
  },
  image: {
    width: 'auto',
    height: Layout.card_image_height,
  },
  round: {
    borderRadius: Layout.card_round,
  },
  rounded: {
    borderRadius: Layout.card_rounded,
  },
});