const API_URL_SETTINGS_DEV = 'http://192.168.1.57:32701/api/v1';

const ApiEndPoints = {
  settings: {
    notificationsTypesByUser: '/notifications/user',
    modesTypesByUser: '/modes/user',
    toggleNotificationByUser: '/notifications/user/toggle',
    toggleModeByUser: '/modes/user/toggle',
    blockedPeopleByUser: '/blocked/user',
    setUnlockUserByUser: '/blocked/user/unlock',
    setBlockUserByUser: '/blocked/user/block',
  },
  identity: {
    //Verification code
    sendVerificationCode: "identity/verificationcode/send",
    checkVerificationCode: "identity/verificationcode/check",

    //Profile
    setUserPassword: "identity/profile/set/password"
  },
  profile: {
    getProfile: "https://run.mocky.io/v3/31eea2d7-1488-4a95-8bda-81a7dabfee3f",
    getInterests: "https://run.mocky.io/v3/77684a79-0430-485f-9282-be4873411063"
  }
};

export {
  ApiEndPoints,
  API_URL_SETTINGS_DEV,
};