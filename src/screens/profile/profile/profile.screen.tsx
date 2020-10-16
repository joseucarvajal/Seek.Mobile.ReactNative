import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface IProfileProps {}

const Profile: React.FC<IProfileProps> = ({}) => {
  return (
    <SafeAreaView>
      <Text>Profile screen nested</Text>
    </SafeAreaView>
  );
};

export default Profile;
