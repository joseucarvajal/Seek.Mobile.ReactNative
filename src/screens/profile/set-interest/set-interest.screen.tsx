import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Layout, Colors } from "../../../constants";
import { Text, Block, Spinner, DisplayError } from '../../../shared';
import { Chip } from "../../../shared";
import { ScrollView } from "react-native";
import { IInterest, useGetInterests } from '../../../hooks/profile'

export interface ISetIntetestProps {

}

const SetIntetest: React.FC<ISetIntetestProps> = () => {
  const {	
    error,	
    data: interests,	
    isLoading	
  } = useGetInterests();

  const chipsList = interests?.map((item: IInterest) => (
    <Block key={item.id}>
      <Chip
        value={item.interest}
        activeColor={Colors.chipPrimary.active}
        inactiveColor={Colors.chipPrimary.inactive}
        textColor
      />
    </Block>
  ));

  return (
    <Block flex>
      
      <Spinner visible={isLoading} />	
      <DisplayError errorResponse={error} />

      <Block left style={{ paddingTop: Layout.base * 2 }}>
        <Text h2 bold>Set Your Public interests</Text>
      </Block>
      <Block style={{ paddingTop: Layout.base, paddingBottom: Layout.base }}>
        <Text h3 numberOfLines={2} style={{ width: Layout.window.width - Layout.base }}>
          Please pick at least 3 public interests to get started.
        </Text>
      </Block>
      <Block flex style={{ marginRight: Layout.base * 2 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block row center wrap paddingBottom={Layout.base * 2}>
            {chipsList}
          </Block>
        </ScrollView>
        <LinearGradient
          colors={[Colors.transparent, Colors.white]}
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, }}
        />
      </Block>
    </Block>
  );
}

export default SetIntetest;