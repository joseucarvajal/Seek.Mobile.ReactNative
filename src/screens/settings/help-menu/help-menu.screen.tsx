import React from "react";

import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface IHelpMenuProps {}

const HelpMenu: React.FC<IHelpMenuProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>Notifications settings nested</Text>
    </SafeAreaView>
  );
};

export default HelpMenu;
