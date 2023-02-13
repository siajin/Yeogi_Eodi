import React from "react";

const GlobalContext = React.createContext({
  userPaths: {},
  setUserPaths: () => {},
  modalObj: {},
  setModalObj: () => {},
});

export default GlobalContext;
