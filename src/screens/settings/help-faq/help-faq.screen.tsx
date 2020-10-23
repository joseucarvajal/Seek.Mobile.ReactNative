import React from 'react';
import { StyleSheet } from "react-native";
import FaqItems from "../../../constants/Faqs";
import { Accordion } from '../../../components/settings';
import { Block } from '../../../shared';
import { Layout } from '../../../constants';

const HelpFaq: React.FC = () => {
  return (
    <Block style={{ paddingTop: Layout.base }}>
      <Accordion items={FaqItems} style={{ paddingLeft: Layout.base, paddingRight: Layout.base }} />
    </Block>
  );
};

export default HelpFaq;