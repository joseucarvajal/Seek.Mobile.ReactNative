import React from "react";
import { useNotificationSettings } from "../../../hooks/settings";
import { Block, Text } from "../../../shared";

export interface ISettingsProps { }

const SettingsVisualization: React.FC<ISettingsProps> = ({ }) => {
  const {incomingDiscreetHellos} = useNotificationSettings();
  return (
    <Block flex center>
      <Text>incoming: {incomingDiscreetHellos?.active.toString()}</Text>
    </Block>
  );
};

export default SettingsVisualization;
