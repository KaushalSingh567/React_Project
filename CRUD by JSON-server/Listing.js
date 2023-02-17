import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Listing = () => {
    const [apidata, setApiData] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = () =>{
        axios.get(`http://localhost:8000/data`).then((response)=>setApiData(response.data))
    } 

    const handleDelete = (id) => {
        console.log("handle DElete", id);
        axios.delete(`http://localhost:8000/data/${id}`)
        loadUser();
    
    }

    console.log(apidata);

    return (
        <div>
            <h2>Listing Data</h2>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                <tbody>
                    <div>{apidata.map((item) => (

                        <tr key={item.id}>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <div style={{ display: "flex" }}>
                                <Link to={`/edituser/${item.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        </tr>
                    )
                    )}</div>
                </tbody>
            </table>
        </div>
    )
}

export default Listing