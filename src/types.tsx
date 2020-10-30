export type RootStackParamList = {
  Root: undefined;
  Home: undefined;

  //SignUp screens
  SignUp: undefined;
  SignUpEmail: undefined;
  SignUpPhone: undefined;
  SignUpVerificationCode: { phoneNumberOrEmail: string };
  SignUpCreatePassword: { phoneNumberOrEmail: string };
  SignUpReady: undefined;

  Profile: undefined;

  //Settings screens
  Settings: undefined;
  HelpFaq: undefined;
  HelpMenu: undefined;
  Legal: undefined;
  TutorialVideo: undefined;
  Modes: undefined;
  Notifications: undefined;

  NotFound: undefined;
};

export type TabParamList = {
  Home: undefined;
  Chat: undefined;
  Contacts: undefined;
  Settings: undefined;
};
