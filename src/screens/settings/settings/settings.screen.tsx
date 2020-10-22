import React from "react";
import SettingsItems from "../../../constants/Settings";
import { Block, Menu } from "../../../shared";

export interface ISettingsProps { }

const Settings: React.FC<ISettingsProps> = ({ }) => {
  return (
    <Block flex center>
      <Menu items={SettingsItems} />
    </Block>
  );
};

export default Settings;
