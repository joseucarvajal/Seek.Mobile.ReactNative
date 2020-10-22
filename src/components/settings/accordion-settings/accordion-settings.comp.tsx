import React from "react";
import {  ViewStyle, FlatList } from "react-native";
import { Layout } from "../../../constants";
import { Accordion, Block } from "../../../shared";

interface IAccordion {
  items: any;
  style?: ViewStyle;
}

const AccordionSettings: React.FC<IAccordion> = ({ 
  items,
  style
}) => {
    const renderItem = ({ item }: { item: any }) => (
      <Block>
        <Accordion text={item.text} title={item.title} style={style} shadow/>
      </Block>
    );
    return (
      <FlatList
        data={items}
        keyExtractor={(item, _) => item.id}
        renderItem={renderItem}
      />
    );
};

export default AccordionSettings;