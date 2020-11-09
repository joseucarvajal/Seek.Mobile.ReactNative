import React from "react";
import SettingsItems from "../../../constants/Settings";
import { useNotificationSettings } from "../../../hooks/settings";
import { Block, Menu, Text } from "../../../shared";

export interface ISettingsProps { }

const Settings: React.FC<ISettingsProps> = ({ }) => {
  return (
    <Block flex center>
      <Menu items={SettingsItems} />
    </Block>
  );
};

export default Settings;
