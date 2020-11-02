import {
  IIdentityState,
  IIdentityActionType,
  SET_USER,
  SET_ISLOGGEDIN,
} from "./identity.types";

export const identityReducer = (
  state: IIdentityState,
  action: IIdentityActionType
): IIdentityState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        applicationUser: action.user,
      };

    case SET_ISLOGGEDIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };

    default:
      return state;
  }
};

export default identityReducer;
