import React, { ReactNode, useState } from 'react';
import { Text, StyleSheet, FlatList, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Layout, Colors } from '../../../constants';
import Block from '../block/block.comp';

export interface IProfileProps {
  index?: number
  children?: ReactNode
  showPagination?: any
  vertical?: any
  onChangeIndex?: any
  onViewableItemsChanged?: any
  disableGesture?: any
  renderAll?: any
  onMomentumScrollEnd?: any
  autoplayDelay?: any
  autoplay?: any
  autoplayLoop?: any
  autoplayInvertDirection?: any
  ref?: any
}

const Swiper: React.FC<IProfileProps> = ({
  index,
  children,
  showPagination,
  vertical,
  onChangeIndex,
  onViewableItemsChanged,
  disableGesture,
  renderAll,
  onMomentumScrollEnd,
  autoplayDelay,
  autoplay,
  autoplayLoop,
  autoplayInvertDirection,
  ref
}) => {

  let _data = Array.isArray(children) ? children : [children]
  let keyExtractor = (item: any, index: number) => index.toString()
  let _renderItem = (object: any) => object.item

  const elements = _data.length
  const _initialNumToRender = renderAll ? elements : 1;
  const [paginationIndex, setPaginationIndex] = useState(index);
  const [prevIndex, setPrevIndex] = React.useState(index);
  const [paginationIndexes, setPaginationIndexes] = React.useState({ index, prevIndex: index });
  const [ignoreOnMomentumScrollEnd, setIgnoreOnMomentumScrollEnd] = React.useState(false);
  const flatListRef = React.useRef<FlatList>(null);
  const [scrollEnabled, setScrollEnabled] = React.useState(!disableGesture);

  const _onChangeIndex = React.useCallback(
    ({ index: _index, prevIndex: _prevIndex }) => {
      onChangeIndex?.({ index: _index, prevIndex: _prevIndex });
    },
    [onChangeIndex],
  );

  const _scrollToIndex = (params: any) => {
    if (typeof params !== 'object') {
      console.error(
        'Expected an object for "scrollToIndex", for example: scrollToIndex({ index: 1, animated: true })',
      );
      return;
    }

    const { index: indexToScroll, animated = true } = params;
    const newParams = { animated, index: indexToScroll };

    setPaginationIndexes(prevState => {
      setIgnoreOnMomentumScrollEnd(true);
      return { index: indexToScroll, prevIndex: prevState.index };
    });

    flatListRef?.current?.scrollToIndex(newParams);
  };

  const _onMomentumScrollEnd = (e?: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!e) return
    if (ignoreOnMomentumScrollEnd) {
      setIgnoreOnMomentumScrollEnd(false);
      return;
    }
    onMomentumScrollEnd?.({ index: paginationIndex }, e);
  };

  React.useEffect(() => {
    const next = {
      index: paginationIndexes.index,
      prevIndex: paginationIndexes.prevIndex,
    };
    if (paginationIndex !== next.index) {
      setPaginationIndex(next.index);
    }
    if (prevIndex !== next.prevIndex) {
      setPrevIndex(next.prevIndex);
    }
    _onChangeIndex({ index: next.index, prevIndex: next.prevIndex });
  }, [paginationIndexes]);

  React.useEffect(() => {
    _onChangeIndex({ index: paginationIndex, prevIndex: prevIndex });
  }, [paginationIndex, prevIndex]);

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: (args: any) => {
      setScrollEnabled(true);
      _scrollToIndex(args);
      setScrollEnabled(!disableGesture);
    },
    getCurrentIndex: () => paginationIndex,
    getPrevIndex: () => prevIndex,
    goToLastIndex: () => {
      setScrollEnabled(true);
      _scrollToIndex({ index: elements - 1 });
      setScrollEnabled(!disableGesture);
    },
    goToFirstIndex: () => {
      setScrollEnabled(true);
      _scrollToIndex({ index: 0 });
      setScrollEnabled(!disableGesture);
    }
  }));

  React.useEffect(() => {
    const isLastIndexEnd = autoplayInvertDirection
      ? paginationIndex === 0
      : paginationIndex === _data.length - 1;
    const shouldContinuoWithAutoplay = autoplay && !isLastIndexEnd;
    let autoplayTimer: any;
    if (shouldContinuoWithAutoplay || autoplayLoop) {
      autoplayTimer = setTimeout(() => {
        const nextIncrement = autoplayInvertDirection ? -1 : +1;

        let nextIndex = (paginationIndex?? + nextIncrement) % _data.length;
        if (autoplayInvertDirection && nextIndex < 0) {
          nextIndex = _data.length - 1;
        }

        _scrollToIndex({ index: nextIndex, animated: !isLastIndexEnd });
      }, autoplayDelay * 1000);
    }
    return () => clearTimeout(autoplayTimer);
  }, [paginationIndex]);

  const _onViewableItemsChanged = React.useRef((params: any) => {
    const { changed } = params;
    const newItem = changed?.[0];
    if (newItem !== undefined) {
      const nextIndex = newItem.index;
      if (newItem.isViewable) {
        setPaginationIndex(nextIndex);
      }
    }
    onViewableItemsChanged?.(params);
  })

  const renderDots = () => {
    const dotList = []
    for (let i = 0; i <= elements - 1; i++)
      dotList.push(<Text key={i} style={[styles.dotStyle, i == paginationIndex ? styles.dotActiveStyle : styles.dotStyle]}>•</Text>)
    return (
      <Block row style={{ alignSelf: 'center', position: 'absolute', bottom: 0 }}>
        {dotList}
      </Block>
    )
  }

  return (
    <Block flex>
      <FlatList
        ref={flatListRef}
        scrollEnabled={scrollEnabled}
        initialNumToRender={_initialNumToRender}
        keyExtractor={keyExtractor}
        data={_data}
        renderItem={_renderItem}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={!vertical}
        initialScrollIndex={index}
        onScrollToIndexFailed={(info: any) => setTimeout(() => _scrollToIndex({ index: info.index, animated: false }))}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100, waitForInteraction: true }}
        onViewableItemsChanged={_onViewableItemsChanged.current}
        style={{ width: Layout.window.width, height: Layout.window.height }}
      />
      {showPagination && renderDots()}
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