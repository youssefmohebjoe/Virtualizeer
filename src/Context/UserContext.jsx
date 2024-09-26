import { createContext, useState } from "react";



export let UserContext = createContext(0);

export function UserContextProvider(props) {

    const [userName, setUserName] = useState('')
    return <UserContext.Provider value={{ userName }}>
        {props.children}
    </UserContext.Provider>
}