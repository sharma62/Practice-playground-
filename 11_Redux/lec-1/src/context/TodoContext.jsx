import { createContext, useState } from "react";

export const TodoContext = createContext(); // Create a context container

export const TodoContextProvider = ({ children }) => { //fill the context with data
    const [taskObj, setTaskObj] = useState([]);
    return (
        <TodoContext.Provider value={{taskObj,setTaskObj}}>
            {children}
        </TodoContext.Provider>
    )
}