import React, {  useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const [userName,setUserName] = useState('')
    // const u = useContext(UserContext)

    const {user,setUser} = useContext(UserContext)

    const handleClick = (e)=>{
        e.preventDefault()
        setUser(userName)
    }
    
  return (
    <div>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} />
        <button onClick={handleClick}>Login</button>
        {user ? <p>Welcome : {user}</p> : <p>Please Login</p>}
    </div>
  )
}

export default Login
