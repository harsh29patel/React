import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=> {
    // children is generic name of passing it to other variables. You can name it anything

    const [user , setuser]= React.useState(null)
return(
    <UserContext.Provider value={{ user , setuser}}>
    {children}
    </UserContext.Provider>
)
}

export  default UserContextProvider