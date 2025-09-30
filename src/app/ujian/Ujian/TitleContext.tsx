"use client";
import React, { createContext, useContext, useState } from "react";

type TitleContextType = {
  title: string;
  setTitle: (t: string) => void;
};

const TitleContext = createContext<TitleContextType>({
  title: "Create Next App",
  setTitle: () => {},
});

export function TitleProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("Create Next App");
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useTitle() {
  return useContext(TitleContext);
}