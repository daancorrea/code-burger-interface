import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const pushUserData = (data) => {
    setUserData(data);
  };
  return (
    <UserContext.Provider value={{ pushUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User must be used with UserContext!");
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
