const API_URL_SETTINGS_DEV = 'http://192.168.1.57:32701/api/v1';

const ApiEndPoints = {
  settings: {
    notificationsTypesByUser: '/notifications/user',
    modesTypesByUser: '/modes/user',
    toggleNotificationByUser: '/notifications/user/toggle',
    toggleModeByUser: '/modes/user/toggle',
  },
  signUp:{
    sendVerificationCode: "verificationcode/send",
    checkVerificationCode: "verificationcode/check",
    setUserPassword: "set/password"
  }
};

export {
    ApiEndPoints,
    API_URL_SETTINGS_DEV
};