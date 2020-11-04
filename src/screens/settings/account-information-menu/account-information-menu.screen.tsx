import React from "react";
import AccountInformationMenuItems from "../../../constants/AccountInformationMenu";
import { Block, Menu } from "../../../shared";

export interface IAccountInformationMenuProps { }

const AccountInformationMenu: React.FC<IAccountInformationMenuProps> = ({ }) => {
  return (
    <Block flex center>
      <Menu items={AccountInformationMenuItems} />
    </Block>
  );
};

export default AccountInformationMenu;
