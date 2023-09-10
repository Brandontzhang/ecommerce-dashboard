"use client"
import { createContext, useState } from "react";

type StoreModalContextType = {
    isOpen : boolean;
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

export const StoreModalContext = createContext<StoreModalContextType | undefined> (
    undefined
);

export const StoreModalContextProvider = (props : any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <StoreModalContext.Provider value={{isOpen : isOpen, setIsOpen}}>
            {props.children}
       </StoreModalContext.Provider> 
    )
}