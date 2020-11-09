import React from "react";
import { ScrollView } from 'react-native'
import { Colors, Layout } from "../../../constants";
import { Text, Block, Input, ToggleButton, Calendar, Select, ButtonPrimary, Image, Icon } from '../../../shared';

export interface IEditBasicInfoProps { 

}

const EditBasicInfo: React.FC<IEditBasicInfoProps> = ({ 
  
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex safe backgroundColor={Colors.white}>

        <Block flex row center middle space='between' paddingBottom={Layout.base}>
          <Block flex>
            <Block>
              <Image source={{ uri: 'https://loremflickr.com/375/466/girl' }} round />
            </Block>
            <Block absolute order={1} style={{ bottom: 0, right: Layout.base * 2 }}>
              <Icon family='FontAwesome' name='pencil-square' size={18} color={Colors.primary} />
            </Block>
          </Block>
          <Block flex={2}>
            <Text h2 bold>Update Profile Photo</Text>
          </Block>
        </Block>

        <Input label='Nickname' color='primary' borderless />

        <Input
          label='First Name'
          color='primary'
          borderless
        >
          <Block row center middle>
            <Text extraSmall book color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => { }} />
          </Block>
        </Input>

        <Input
          label='Last Name'
          color='primary'
          borderless
        >
          <Block row center middle>
            <Text extraSmall book color={Colors.placeholder}>Make Public  </Text>
            <ToggleButton color='primary' onValueChange={() => { }} />
          </Block>
        </Input>

        <Input label='Enter Phone' color='primary' borderless />

        <Block flex row space='between' order={1}>
          <Block flex={2} paddingVertical={Layout.base}>
            <Calendar label='Date of Birth' borderBottomColor={Colors.primary}/>
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

        <Input label='Email Address' color='primary' borderless />

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
              <Text extraSmall book color={Colors.placeholder}>Make Public  </Text>
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