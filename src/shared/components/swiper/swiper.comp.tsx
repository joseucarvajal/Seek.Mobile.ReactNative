import React, { ReactNode, useState } from 'react';
import { ScrollView, Text, StyleSheet, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Layout, Colors } from '../../../constants';
import Block from '../block/block.comp';

export interface IProfileProps {
  children?: ReactNode
  pagination?: any
  onPageChange?: any
}

const Swiper: React.FC<IProfileProps> = ({
  children,
  pagination,
  onPageChange
}) => {

  const [currentPage, setCurrentPage] = useState(0);
  const elements = React.Children.count(children)

  const onScrollChangeIndex = (e?: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!e) return
    const xOffset = e.nativeEvent.contentOffset.x + 10
    const currentPage = Math.floor(xOffset / Layout.window.width)
    setCurrentPage(currentPage)
  };

  const onMomentumScrollEnd = (e?: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!e) return
    const xOffset = e.nativeEvent.contentOffset.x + 10
    const newCurrentPage = Math.floor(xOffset / Layout.window.width)
    if (currentPage === newCurrentPage) {
      if (onPageChange && typeof onPageChange === 'function') {
        onPageChange(newCurrentPage)
      }
    }
  }

  const renderDots = () => {
    const dotList = []
    for (let i = 0; i <= elements - 1; i++)
      dotList.push(<Text key={i} style={[styles.dotStyle, i == currentPage ? styles.dotActiveStyle : styles.dotStyle]}>•</Text>)
    return dotList
  }

  return (
    <Block flex>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={Layout.window.width}
        snapToAlignment="center"
        decelerationRate='fast'
        horizontal
        onScroll={onScrollChangeIndex}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        style={{ width: Layout.window.width, height: Layout.window.height }}
      >
        {children}
      </ScrollView>
      {pagination &&
        <Block row style={{ alignSelf: 'center', position: 'absolute', bottom: 0 }}>
          {renderDots()}
        </Block>
      }
    </Block>
  );
}

export default Swiper;

const styles = StyleSheet.create({
  dotStyle: {
    fontSize: 40,
    color: Colors.quaternary
  },
  dotActiveStyle: {
    fontSize: 40,
    color: Colors.primary
  }
})