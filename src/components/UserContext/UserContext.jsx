import React, { createContext, useContext } from "react";
const AUTH_CONTEXT = createContext();
export const UserContext = ({ children }) => {
  const authInfo = {};
  return (
    <AUTH_CONTEXT.Provider value={authInfo}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuth = () => useContext(AUTH_CONTEXT);
