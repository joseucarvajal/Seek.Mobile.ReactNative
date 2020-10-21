import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, ViewStyle } from "react-native";
import { Colors, Layout } from "../../../constants";
import Text from "../text/text.comp"
import Icon from "react-native-vector-icons/MaterialIcons";
import Block from "../block/block.comp";

// interface IAccordionProps {
//     title?: string,
//     items?: any;
//     shadow?: any;
//     props?: any;
//     style?: ViewStyle;
// }

// interface IAccordionState {
//     items: any;
//     expanded: any
// }

interface IAccordion {
    title?: string,
    items?: any;
    shadow?: any;
    props?: any;
    style?: ViewStyle;
    expanded: any;
}

const Accordion: React.FC<IAccordion> = ({ 
  title,
  items,
  shadow,
  props,
  style,
  expanded: expandedProps
}) => {
    const [expanded, setExpanded] = useState(expandedProps);

    
    const toggleExpand = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    }
    
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    
    return (
      <Block shadow={shadow}>
        <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
            <Text h3 style={styles.title}>{title}</Text>
            <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.parent} />
        {expanded && (
          <Block shadow={shadow} style={styles.child}>
            <Text h3 style={styles.title}>{items}</Text>
          </Block>
        )}
      </Block>
    );
};

// class Accordion extends React.Component<IAccordionProps, IAccordionState> {
//     constructor(props: IAccordionProps) {
//         super(props);
//         this.state = {
//             items: this.props.items,
//             expanded: false,
//         }
//         if (Platform.OS === 'android') {
//             UIManager.setLayoutAnimationEnabledExperimental(true);
//         }
//     }

//     toggleExpand = () => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         this.setState({ expanded: !this.state.expanded })
//     }

//     render() {
//         return (
//             <Block shadow={this.props.shadow}>
//                 <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
//                     <Text h3 style={styles.title}>{this.props.title}</Text>
//                     <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.black} />
//                 </TouchableOpacity>
//                 <View style={styles.parent} />
//                 {
//                     this.state.expanded &&
//                     <Block shadow={this.props.shadow} style={styles.child}>
//                         <Text h3 style={styles.title}>{this.props.items}</Text>
//                     </Block>
//                 }
//             </Block>
//         )
//     }
// }


export default Accordion;

const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: Colors.tabs,
        borderRadius: Layout.accordion_border_radius
    },
    parent: {
        height: Layout.base,
        color: Colors.white,
        width: '100%'
    },
    child: {
        backgroundColor: Colors.gray,
        padding: 16,
        borderRadius: Layout.accordion_border_radius
    }
});