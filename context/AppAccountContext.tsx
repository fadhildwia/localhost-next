import React, { createContext, useEffect, useReducer } from 'react';

import { AccountResponse } from '@/interface/AccountInterface';

type Account = AccountResponse | null;

interface State {
  account: Account;
}

type Action = { type: 'SetAccount'; payload: Account } | { type: 'RemoveAccount' };

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const AccountContext = createContext({} as Props);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SetAccount': {
      return { ...state, account: action.payload };
    }
    case 'RemoveAccount': {
      return { ...state, account: null };
    }
    default:
      return state;
  }
};

const AppAccountContext = ({ children }: { children: React.ReactNode }) => {
  const data = null;
  const [state, dispatch] = useReducer(reducer, {
    account: data
  });
  useEffect(() => {
    dispatch({ type: 'SetAccount', payload: data });
  }, [data]);
  return <AccountContext.Provider value={{ state, dispatch }}>{children}</AccountContext.Provider>;
};

export default AppAccountContext;
