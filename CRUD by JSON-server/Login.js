import React, { useState } from 'react'

const Login = () => {
    const [loginstate , setLoginState] = useState({
        email:'',
        password:''
    })
    
    const handleLogin = () => {

    }

    return (
        <div>
            <p>Login</p>
            Email<input type="email" name="email" value={loginstate.email}
                   onChange={(e)=>{setLoginState( {email : e.target.value})}} placeholder="Enter Email" /><br/>
            Password<input type="password" name="password" value={loginstate.password} 
                   onChange={(e)=>{setLoginState( { password : e.target.value})}} placeholder="Enter Password"/><br/>
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default Login




