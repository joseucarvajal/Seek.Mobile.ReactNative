const ApiEndPoints = {
  notificationsandmodessettings: {
    //Notifications
    notificationsTypesByUser: 'notificationsandmodessettings/notifications/user',
    toggleNotificationByUser: 'notificationsandmodessettings/notifications/user/toggle',
    //Modes
    modesTypesByUser: 'notificationsandmodessettings/modes/user',
    toggleModeByUser: 'notificationsandmodessettings/modes/user/toggle',
  },
  identity: {
    //Verification code
    sendVerificationCode: "identity/verificationcode/send",
    checkVerificationCode: "identity/verificationcode/check",

    //Profile
    setUserPassword: "identity/profile/set/password"
  },
  interest: {
    getInterests: "https://run.mocky.io/v3/77684a79-0430-485f-9282-be4873411063"
  },
  profile: {
    getProfile: "https://run.mocky.io/v3/31eea2d7-1488-4a95-8bda-81a7dabfee3f",
    getAllProfiles: "https://run.mocky.io/v3/77684a79-0430-485f-9282-be4873411063"
    getInterests: "https://run.mocky.io/v3/77684a79-0430-485f-9282-be4873411063"
  },
  myconnections: {
    //Connection
    blockedUsers: 'myconnections/connection', // add route after the user id /blockedusers
    unblock: 'myconnections/connection/unblock',
    block: 'myconnections/connection/block'
  },
  myinterestlevels: {
    // controller name xxx
  }
};

export {
  ApiEndPoints
};