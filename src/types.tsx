export type RootStackParamList = {
  Root: undefined;
  Home: undefined;

  //SignUp Screens
  SignUp: undefined;
  SignUpEmail: undefined;
  SignUpPhone: undefined;
  SignUpVerificationCode: { phoneNumberOrEmail: string };
  SignUpReady: undefined;

  // Profile Screens
  Profile: undefined;
  EditProfile: undefined;
  EditBasicInfo: undefined;

  //Settings Screens
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
