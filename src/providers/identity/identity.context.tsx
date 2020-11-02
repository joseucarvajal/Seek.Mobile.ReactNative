import React from "react";
import { createContext, Dispatch, useReducer } from "react";
import { IIdentityState, IIdentityActionType } from "./identity.types";

import identityReducer from "./identity.reducer";
import { Context } from "react";

const initialState = {
  isLoggedIn: false,
  applicationUser: {
    id: "545DE66E-19AC-47D2-57F6-08D8715337D7"
  },
} as IIdentityState;
export const IdentityStateContext = createContext(initialState);

export const IdentityDispatchContext: Context<Dispatch<
  IIdentityActionType
>> = createContext<Dispatch<IIdentityActionType>>(() => {});

export const IdentityProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(identityReducer, initialState);

  return (
    <IdentityStateContext.Provider value={state}>
      <IdentityDispatchContext.Provider value={dispatch}>
        {children}
      </IdentityDispatchContext.Provider>
    </IdentityStateContext.Provider>
  );
};

export default IdentityProvider;
