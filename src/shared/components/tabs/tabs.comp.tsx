import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, FlatList, Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Colors, FontNames, Layout } from '../../../constants';
import Block from '../block/block.comp'
import Text from '../text/text.comp'

export interface ITabsProps {
  initialIndex?: any;
  onChange?: any;
  backgroundless?: any;
  data?: any;
  customTextColor?: string;
  gradient?: boolean
  showSeparator?: boolean
}

const defaultMenu = [
  { id: 'terms', title: 'Terms of service', },
  { id: 'privacy', title: 'Privacy policy', },
  { id: 'cookies', title: 'Cookie policy', }
];

const Tabs: React.FC<ITabsProps> = ({
  initialIndex,
  onChange,
  backgroundless,
  data: dataTabs,
  customTextColor,
  gradient,
  showSeparator
}, props) => {
  const [initialIndexDefault, setInitialIndexDefault] = useState(null);
  const [data, _] = useState(dataTabs ? dataTabs : defaultMenu);
  const [active, setActive] = useState(null);
  const menuRef: any = useRef();
  const animatedValue = new Animated.Value(1);

  const onScrollToIndexFailed = () => {
    menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5
    });
  };

  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const selectMenu = (id: any) => {
    setActive(id);

    menuRef.current.scrollToIndex({
      index: data.findIndex((item: any) => item.id === id),
      viewPosition: 0.5
    });

    animate();
    onChange && onChange(id);
  };

  const renderItem = (item: any) => {
    const isActive = active === item.id;

    const textColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.inactiveTab, isActive ? Colors.activeTab : Colors.inactiveTab],
      extrapolate: 'clamp',
    });

    const containerStyles = [
      styles.titleContainer,
      !isActive && { backgroundColor: Colors.transparent },
      isActive && backgroundless && styles.shadow
    ];

    return (
      <>
        {gradient && isActive ?
          <LinearGradient
            colors={[Colors.homeTab.active, Colors.homeTab.inactive]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={containerStyles}
          >
            <Animated.Text
              style={[
                styles.menuTitle,
                { color: customTextColor ? customTextColor : textColor },
                { fontFamily: FontNames.CamptonMedium },
              ]}
              onPress={() => selectMenu(item.id)}>
              {item.title}
            </Animated.Text>
          </LinearGradient>
          :
          <Block style={containerStyles}>
            <Animated.Text
              style={[
                styles.menuTitle,
                { color: customTextColor ? customTextColor : textColor },
                { fontFamily: FontNames.CamptonMedium },
              ]}
              onPress={() => selectMenu(item.id)}>
              {item.title}
            </Animated.Text>
          </Block>
        }
      </>
    )
  };

  const renderMenu = () => {
    return (
      <FlatList
        {...props}
        data={data}
        horizontal={true}
        ref={menuRef}
        extraData={active}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={onScrollToIndexFailed}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.menu}
        ItemSeparatorComponent={showSeparator && FlatListItemSeparator}
      />
    )
  };

  const FlatListItemSeparator = () => {
    return (
      <Block backgroundColor={Colors.white} width={1} height={'70%'} style={{ margin: 5, marginRight: 0 }} />
    )
  }

  const updateInitialIndex = useCallback(() => {
    if (initialIndexDefault === null) {
      console.log('entro', initialIndex);
      selectMenu(initialIndex);
      setInitialIndexDefault(initialIndex);
    }
  }, [initialIndex, selectMenu]);

  useEffect(() => {
    updateInitialIndex();
  }, [updateInitialIndex])

  return (
    <Block style={[styles.container, backgroundless && { backgroundColor: Colors.transparent }]}>
      {renderMenu()}
    </Block>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,
    backgroundColor: Colors.tabs,
    zIndex: 2
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: Layout.android_elevation,
  },
  menu: {
    paddingHorizontal: Layout.base * 2,
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: Colors.tabs,
    borderRadius: 20,
    marginRight: 0,
    paddingHorizontal: 0,
    paddingVertical: 3,
  },
  menuTitle: {
    fontWeight: '600',
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 5,
    color: Colors.black
  }
});