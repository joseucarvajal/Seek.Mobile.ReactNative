import React, { ReactNode, useState } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from "react-native";
import { Layout, Colors } from '../../../constants';
import Block from '../block/block.comp';
import Text from '../text/text.comp'

export interface IProfileProps {
  index?: number
  children?: ReactNode
  showPaginationTop?: any
  showPaginationBottom?: any
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
  style?: ViewStyle,
  height?: number,
  width?: number
}

const Swiper: React.FC<IProfileProps> = ({
  index,
  children,
  showPaginationTop,
  showPaginationBottom,
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
  ref,
  style,
  height = Layout.window.height,
  width = Layout.window.width
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

        let nextIndex = (paginationIndex ?? + nextIncrement) % _data.length;
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

  const renderDots = (customStyle: ViewStyle) => {
    const dotList = []
    for (let i = 0; i <= elements - 1; i++) {
      let color = i == paginationIndex ? { color: Colors.primary } : { color: Colors.quaternary }
      dotList.push(<Text key={i} fontSize={45} style={color}>•</Text>)
    }
    return (
      <Block absolute row style={[{ alignSelf: 'center' }, customStyle]}>
        {dotList}
      </Block>
    )
  }

  return (
    <>
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
        style={[{ width: width, height: height }, style]}
      />
      {showPaginationBottom && renderDots({ bottom: 0 })}
      {showPaginationTop && renderDots({ top: 30 } )}
    </>
  );
}

export default Swiper;