import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewEmployee() {

    const[employee,setEmployee]=useState({
        name:"",
        username:"",
        email:""
    })

    const {id}=useParams()

     const loadEmployee = async (e) => {
    
    try {
        const result = await axios.get(`http://localhost:8082/employee/${id}`);
      setEmployee(result.data)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
     // const loadEmployee=async ()=>{
    //  const result = await axios.get(`http://localhost:8080/user/${id}`);
    // console.log(result);
    // console.log(employee.id);
    //     setEmployee(result.data)
    // }
    useEffect(()=>{
        loadEmployee()
    },[])
   
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Employee Details</h2>

            <div className="card">
                <div className="card-header">
                    Details of employee id : {employee.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name :</b>
                            {employee.name}
                        </li>
                        <li className="list-group-item">
                            <b>Employee Name :</b>
                            {employee.username}
                        </li>
                        <li className="list-group-item">
                            <b>Email :</b>
                            {employee.email}
                        </li>
                    </ul>
                </div>

            </div>
            <Link className="btn btn-primary my-2" to={"/"}>
                Back to Home
            </Link>
            </div>
            </div>
            </div>

  );
}
