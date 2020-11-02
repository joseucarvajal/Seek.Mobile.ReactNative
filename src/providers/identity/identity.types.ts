import { IApplicationUser } from "../../shared";

export interface IIdentityState {
  isLoggedIn: boolean;
  applicationUser: IApplicationUser | null;
}

export const SET_USER = "SET_USER";
export const SET_ISLOGGEDIN = "SET_ISLOGGEDIN";

export type IIdentityActionType =
{ type: typeof SET_USER; user: IApplicationUser } |
{ type: typeof SET_ISLOGGEDIN; isLoggedIn: boolean };
