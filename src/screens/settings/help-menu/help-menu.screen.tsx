import React from "react";
import HelpMenusItems from "../../../constants/HelpMenus";
import { Block, Menu } from "../../../shared";

export interface IHelpMenuProps {}

const HelpMenu: React.FC<IHelpMenuProps> = ({}) => {
  return (
    <Block flex>
      <Menu items={HelpMenusItems} />
    </Block>
  );
};

export default HelpMenu;
