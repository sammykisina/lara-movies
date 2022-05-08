import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleWidget, setToggleWidget] = useState(false);

  return (
    <AppContext.Provider
      value={{ toggleSidebar, setToggleSidebar, toggleWidget, setToggleWidget }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
