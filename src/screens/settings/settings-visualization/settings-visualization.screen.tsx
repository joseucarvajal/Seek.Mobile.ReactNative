import React from "react";
import { useModeSettings, useNotificationSettings } from "../../../hooks/settings";
import { Block, Text } from "../../../shared";

export interface ISettingsProps { }

const SettingsVisualization: React.FC<ISettingsProps> = ({ }) => {
  const {
    incomingDiscreetHellos,
    incomingGestures,
    incomingChat,
    temperatureMeterChange,
    inAppVibrations,
    inAppSounds 
  } = useNotificationSettings();

  const { incognitoMode, receptivityMode } = useModeSettings();

  return (
    <Block flex center>
      <Text>incoming Discreet Hellos: {incomingDiscreetHellos?.active.toString()}</Text>
      <Text>incoming Gestures: {incomingGestures?.active.toString()}</Text>
      <Text>incoming Chat: {incomingChat?.active.toString()}</Text>
      <Text>temperature Meter Change: {temperatureMeterChange?.active.toString()}</Text>
      <Text>in App Vibrations: {inAppVibrations?.active.toString()}</Text>
      <Text>in App Sounds: {inAppSounds?.active.toString()}</Text>
      <Text>Modes</Text>
      <Text>in App Vibrations: {incognitoMode?.active.toString()}</Text>
      <Text>in App Sounds: {receptivityMode?.active.toString()}</Text>
    </Block>
  );
};

export default SettingsVisualization;
