export type RootStackParamList = {
  Root: undefined;
  Home: undefined;

  //SignUp Screens
  Onboarding: undefined;
  SignUp: undefined;
  SignUpEmail: undefined;
  SignUpPhone: undefined;
  SignUpVerificationCode: { phoneNumberOrEmail: string };
  SignUpCreatePassword: { phoneNumberOrEmail: string };
  SignUpReady: undefined;

  // Profile Screens
  Profile: undefined;
  EditProfile: undefined;
  EditBasicInfo: undefined;
  EnterLocationInfo: undefined;
  Congrats: undefined;

  //Settings Screens
  Settings: undefined;
  HelpFaq: undefined;
  HelpMenu: undefined;
  Legal: undefined;
  TutorialVideo: undefined;
  Modes: undefined;
  Notifications: undefined;
<<<<<<< HEAD

  AccountInformationMenu: undefined;
  BlockedPeople: undefined;

=======
  AccountInformationMenu: undefined;
  BlockedPeople: undefined;
>>>>>>> d284f6745203364e9a6e5dc93af0acb77f4c78c8
  NotFound: undefined;
};

export type TabParamList = {
  Home: undefined;
  Chat: undefined;
  Contacts: undefined;
  Settings: undefined;
};
