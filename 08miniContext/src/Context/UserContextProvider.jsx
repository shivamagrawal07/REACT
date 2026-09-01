import React from "react";
import Usercontext from "./UserContext";

const UserContextProvider = ({Children}) => {
    const[user, setUser] = React.useState(null)
        return (
            <UserContextProvider>
            {Children}
            </UserContextProvider>
        )
}

export default UserContextProvider