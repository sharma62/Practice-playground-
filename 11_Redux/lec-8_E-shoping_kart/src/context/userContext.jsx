import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        img:'https://www.pagalparrot.com/wp-content/uploads/2020/06/bm-1024x1024.jpg',
        name: 'Amit Kumar',
        email: 'Ak123@gmail.com',
        phone: '9988776655',
        adds: 'Patna, Bihar, India ',
    })

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}