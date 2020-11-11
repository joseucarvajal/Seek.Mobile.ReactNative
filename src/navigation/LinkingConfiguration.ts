import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Settings: {
            screens: {
              SettingsScreen: 'settings',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      
      Home: {},

      //Sign-up screens
      SignUp: {},
      SignUpEmail: {},
      SignUpPhone: {},
      SignUpVerificationCode: {},
      SignUpCreatePassword: {},
      SignUpReady: {},
      Login: {},

      //Profile screens
      Profile: {},

      //Settings screens
      Settings: {},
      HelpFaq: {},
      HelpMenu: {},
      Legal: {},
      TutorialVideo: {},
      Modes: {},
      Notifications: {},
      AccountInformationMenu: {},
      BlockedPeople: {},
      SettingsVisualization: {},
      
      NotFound: '*',
    },
  },
};
