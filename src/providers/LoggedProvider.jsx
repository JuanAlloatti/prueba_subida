import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks";

const LoggedContext = createContext(null);
const SetLoggedContext = createContext(null);

export const useLoggedContext = () => {
    return useContext(LoggedContext);
}

export const useSetLoggedContext = () =>{
    return useContext(SetLoggedContext);
}

const LoggedProvider = ({children})=> {

    const [token] = useLocalStorage('token');
    const [isLogged, setIsLogged] = useState(token ? true : false);

    return (
        <LoggedContext.Provider value={isLogged}>
            <SetLoggedContext.Provider value={setIsLogged}>
                {children}
            </SetLoggedContext.Provider>
        </LoggedContext.Provider>
    );
}

export default LoggedProvider;