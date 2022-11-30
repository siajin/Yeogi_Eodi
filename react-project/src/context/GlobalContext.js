import React from "react";

const GlobalContext = React.createContext({
  userPaths: {},
  setUserPaths: () => {},
});

export default GlobalContext;
