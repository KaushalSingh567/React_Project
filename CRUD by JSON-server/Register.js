import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const [mainstate, setMainState] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleSubmit = () => {
        axios.post(`http://localhost:8000/data`, {fname:mainstate.fname,lname:mainstate.lname,email:mainstate.email,password:mainstate.password})
        .then((data) =>{console.log("Successfully Submit",data);} )
        .catch(err=>console.log(err))
        navigate("/listing")
    }

    return (
        <div className='Rdiv'>
            <h2>Register</h2>
            <div className='maindiv'>
                <label>First Name</label>
                <input type="text" placeholder='Enter First Name' name="fname" value={mainstate.fname}
                    onChange={(e) => { setMainState({...mainstate,fname:e.target.value }) }} /> <br />
                <label>Last Name</label>
                <input type="text" placeholder='Enter Last Name' name="lname" value={mainstate.lname}
                    onChange={(e) => { setMainState({...mainstate,lname:e.target.value })  }} /> <br />
                <label>Email</label>
                <input type="email" placeholder='Enter Email' name="email" value={mainstate.email}
                    onChange={(e) => { setMainState({...mainstate,email:e.target.value })  }} /> <br />
                <label>Password</label>
                <input type="password" placeholder='Enter Password' name="password" value={mainstate.password}
                    onChange={(e) => { setMainState({...mainstate,password:e.target.value })  }} /> <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>

            
        </div>

    )
}

export default Register

// edit, delete, list
// useNavigate
// single obj state
// 20 question read