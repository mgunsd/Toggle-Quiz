import React, { createContext, useReducer, useMemo } from 'react';

//fix any types later
export default  (reducer:any, actions:any, defaultValue:any):any => {

  const Context: React.Context<any> = createContext(defaultValue);

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions:any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    const contextValue = useMemo(
      () => ({state,...boundActions}),
      [state, boundActions]
    );
    return (
      <Context.Provider value={contextValue}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};