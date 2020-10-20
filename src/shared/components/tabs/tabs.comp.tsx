import React from 'react';
import { StyleSheet, FlatList, Animated } from 'react-native';
import { Colors, FontNames, Layout } from '../../../constants';
import Block from '../block/block.comp'

export interface ITabsProps {
    initialIndex?: any;
    onChange?: any;
    backgroundless?: any;
    data?: any;
}

interface ITabsState {

}

const defaultMenu = [
    { id: 'terms', title: 'Terms of service', },
    { id: 'privacy', title: 'Privacy policy', },
    { id: 'cookies', title: 'Cookie policy', }
];

class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps) {
        super(props);
    }

    static defaultProps = {
        data: defaultMenu,
        initialIndex: null,
    }

    state = {
        active: null,
    }

    componentDidMount() {
        const { initialIndex } = this.props;
        initialIndex && this.selectMenu(initialIndex);
    }

    animatedValue = new Animated.Value(1);

    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false,
        }).start()
    }

    menuRef: any = React.createRef();

    onScrollToIndexFailed = () => {
        this.menuRef.current.scrollToIndex({
            index: 0,
            viewPosition: 0.5
        });
    }

    selectMenu = (id: any) => {
        this.setState({ active: id });

        this.menuRef.current.scrollToIndex({
            index: this.props.data.findIndex((item: any) => item.id === id),
            viewPosition: 0.5
        });

        this.animate();
        this.props.onChange && this.props.onChange(id);
    }

    renderItem = (item: any) => {
        const isActive = this.state.active === item.id;

        const textColor = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.inactiveTab, isActive ? Colors.activeTab : Colors.inactiveTab],
            extrapolate: 'clamp',
        });

        const containerStyles = [
            styles.titleContainer,
            !isActive && { backgroundColor: Colors.tabs },
            isActive && this.props.backgroundless && styles.containerShadow
        ];

        return (
            <Block style={containerStyles}>
                <Animated.Text
                    style={[
                        styles.menuTitle,
                        { color: textColor },
                        { fontFamily: FontNames.CamptonMedium },
                    ]}
                    onPress={() => this.selectMenu(item.id)}>
                    {item.title}
                </Animated.Text>
            </Block>
        )
    }

    renderMenu = () => {
        const { data, ...props } = this.props;

        return (
            <FlatList
                {...props}
                data={data}
                horizontal={true}
                ref={this.menuRef}
                extraData={this.state}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                onScrollToIndexFailed={this.onScrollToIndexFailed}
                renderItem={({ item }) => this.renderItem(item)}
                contentContainerStyle={styles.menu}
            />
        )
    }

    render() {
        return (
            <Block style={[styles.container, this.props.backgroundless && { backgroundColor: Colors.transparent }]}>
                {this.renderMenu()}
            </Block>
        )
    }
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        backgroundColor: Colors.tabs,
        zIndex: 2,
        marginLeft: -Layout.base
    },
    shadow: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 4,
    },
    menu: {
        paddingHorizontal: Layout.base * 2.5,
        paddingTop: 8,
        paddingBottom: 16,
    },
    titleContainer: {
        alignItems: 'center',
        backgroundColor: Colors.tabs,
        borderRadius: 21,
        marginRight: 9,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    containerShadow: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    menuTitle: {
        fontWeight: '600',
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: Colors.black
    },
    backgroundless: {
        
    }
});