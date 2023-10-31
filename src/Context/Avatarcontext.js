import { createContext} from "react";
export const Avatarcontext = createContext("");

const MyProvider = ({ children }) => {
    const value1 = 'Value 1';
    const value2 = 'Value 2';
  
    return (
      <Avatarcontext.Provider value={{ value1, value2 }}>
        {children}
      </Avatarcontext.Provider>
    );
  };