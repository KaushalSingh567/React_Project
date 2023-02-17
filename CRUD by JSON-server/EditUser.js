import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
    const [mainstate, setMainState] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(()=>{
        loadUser()
    },[])
    
    const handleSubmit = () => {
        axios.put(`http://localhost:8000/data/${id}`, {fname:mainstate.fname,lname:mainstate.lname,email:mainstate.email,password:mainstate.password})
        .catch(err=>console.log(err))
        navigate("/listing")
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8000/data/${id}`)
        setMainState(result.data)
        
    }

    return (
        <div className='Rdiv'>
            <h2>Edit User</h2>
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

export default EditUser