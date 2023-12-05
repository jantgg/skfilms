"use client"
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [estado1, setEstado1] = useState(true);
  const [estado2, setEstado2] = useState(false);
  const [estado3, setEstado3] = useState(false);

  const contextValue = {
    estado1,
    setEstado1,
    estado2,
    setEstado2,
    estado3,
    setEstado3,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
