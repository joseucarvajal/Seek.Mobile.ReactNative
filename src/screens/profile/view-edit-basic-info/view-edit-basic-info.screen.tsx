import React from "react";
import { ScrollView } from 'react-native'
import { Colors, Layout } from "../../../constants";
import { Text, Block, Input, ToggleButton, Calendar, Select, ButtonPrimary } from '../../../shared';

export interface IEditBasicInfoProps { }

const EditBasicInfo: React.FC<IEditBasicInfoProps> = ({ }) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex safe backgroundColor={Colors.white}>
        <Input label='Nickname' color='primary' borderless />
        <Input
          label='First Name'
          color='primary'
          borderless
        >
          <Block row center middle>
            <Text h4 color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => { }} />
          </Block>
        </Input>
        <Input
          label='Last Name'
          color='primary'
          borderless
        >
          <Block row center middle>
            <Text h4 color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => { }} />
          </Block>
        </Input>
        <Input label='Enter Phone' color='primary' borderless />
        <Block flex row space='between' order={1}>
          <Block flex={2} paddingVertical={Layout.base}>
            <Calendar label='Date of Birth' />
          </Block>
          <Block flex paddingLeft={Layout.base} paddingVertical={Layout.base}>
            <Select
              label='Gender'
              defaultValue={'f'}
              items={[
                { label: 'Male', value: 'm' },
                { label: 'Female', value: 'f' },
              ]}
              shadow
              style={{ width: 'auto' }}
            />
          </Block>
        </Block>
        <Input label='Email Address' color='primary' borderless style={{ zIndex: -1 }} />
        <Block flex paddingVertical={Layout.base} order={1}>
          <Select
            multiple={true}
            label='Languages Known'
            defaultValue={'es'}
            items={[
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
              { label: 'French', value: 'fr' },
              { label: 'German', value: 'gr' },
              { label: 'Italian', value: 'it' },
            ]}
            shadow
          />
        </Block>
        <Input label='School' color='primary' borderless />
        <Input label='Job / Industry' color='primary' borderless />
        <Block flex paddingTop={Layout.base * 2}>
          <Block paddingVertical={Layout.base}>
            <Text h2 bold>About</Text>
          </Block>
          <Text h2 light>Hi, everybody! I am vehicula erat vitae ojia ultrices ullamcorper. Nulla a leo nec tellus volutpat vestibulum a eu ligula. Aenean mollis purus a viverra scelerisque.</Text>
        </Block>
        <Block flex paddingTop={Layout.base}>
          <Block flex row center space='between' paddingVertical={Layout.base}>
            <Text h2 bold>Inner Thoughts</Text>
            <Block row center middle>
              <Text h4 color={Colors.placeholder}>Make Public  </Text>
              <ToggleButton color='primary' onValueChange={() => { }} />
            </Block>
          </Block>
          <Text h2 light>Hi, everybody! I am vehicula erat vitae ojia ultrices ullamcorper. Nulla a leo nec tellus volutpat vestibulum a eu ligula. Aenean mollis purus a viverra scelerisque.</Text>
        </Block>
        <Block flex paddingTop={Layout.base * 2}>
          <ButtonPrimary onPress={() => console.log('SAVE')}>
            SAVE
          </ButtonPrimary>
        </Block>
      </Block>
    </ScrollView>
  );
}

export default EditBasicInfo;