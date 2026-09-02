import React, {useContext} from 'react'
import Usercontext from '../Context/UserContext'

function Profile() {
    const {User} = useContext(Usercontext)

    if(!User) return <div>please login</div>

    return <div>Welcome {User.username}</div>
}

export default Profile
