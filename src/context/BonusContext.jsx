import { createContext, useState } from "react";

export const BonusContext = createContext()

export const BonusContextProvider = ({children}) =>{
    const [bonus,setBonus] = useState(0)
    return (
        <BonusContext.Provider value={{bonus,setBonus}}>
            {children}
        </BonusContext.Provider>
    )
}

