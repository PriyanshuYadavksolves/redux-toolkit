import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [myName, setMyName] = useState("priyanshu");
  return(
  <MyContext.Provider value={{ myName, setMyName }}>
    {children}
  </MyContext.Provider>
  )
};
