import { createContext, useContext, useState } from "react"

export const MobileHeaderContext = createContext()

const MobileHeaderContextProvider = ({ children }) => {
    const [isOpenHeader, setOpenHeader] = useState(false)
    
    return (
        <MobileHeaderContext.Provider value={{ isOpenHeader, setOpenHeader }}>
            { children }
        </MobileHeaderContext.Provider>
    );
}

export const useMobileHeaderContext = () => {
    return useContext(MobileHeaderContext)
}
 
export default MobileHeaderContextProvider;