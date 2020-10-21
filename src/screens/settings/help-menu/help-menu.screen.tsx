import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HelpMenusItems from "../../../constants/HelpMenus";
import { MenuItem } from "../../../shared";
import styles from './help-menu.style';

export interface IHelpMenuProps {}

const HelpMenu: React.FC<IHelpMenuProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <MenuItem items={HelpMenusItems} />
      </View>
    </View>
  );
};

export default HelpMenu;
