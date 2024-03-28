import { createContext, useState } from "react";

export const BonusContext = createContext();

export const BonusContextProvider = ({ children }) => {
    const [bonusName,setBonusName] = useState('bonus')

  return (
     <BonusContext.Provider value={{bonusName,setBonusName}}>
        {children}
    </BonusContext.Provider>)
};



