import React from "react";
import { ScrollView } from "react-native";
import HelpMenusItems from "../../../constants/HelpMenus";
import { Block, MenuItem } from "../../../shared";
import styles from './help-menu.style';

export interface IHelpMenuProps {}

const HelpMenu: React.FC<IHelpMenuProps> = ({}) => {
  return (
    <Block flex>
      <MenuItem items={HelpMenusItems} />
    </Block>
  );
};

export default HelpMenu;
