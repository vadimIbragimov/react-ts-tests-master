import React, { createContext, Dispatch, useReducer } from 'react';

const SET_SOME_VALUE = 'SET_SOME_VALUE';
const setSomeValue = (newValue?: string) => ({
  type: SET_SOME_VALUE,
  payload: newValue
});
type ContextState = {
  someValue?: string;
}
type ActionType = ReturnType<typeof setSomeValue>;
type ContextType = {
  state: ContextState,
  dispatch?: Dispatch<ActionType>
}
const ContextReducer = (
  state: ContextState,
  action: ActionType
) => {
  switch (action.type) {
    case SET_SOME_VALUE: {
      return { ...state, someValue: action.payload };
    }
    default:
      return state;
  }
};
const SomeContext = createContext<ContextType>({
  state: {}
});
const SomeContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, {});
  return <SomeContext.Provider value={{ state, dispatch }}>{children}</SomeContext.Provider>;
};
export {SomeContext, SomeContextProvider, setSomeValue};