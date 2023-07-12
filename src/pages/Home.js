import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
const [employees,setEmployees]=useState([]);

useEffect(() =>{
  loadEmployees();

},[]);

const loadEmployees = async()=>{
  const result = await axios.get("http://localhost:8082/employees");
  setEmployees(result.data);
};

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      employees.map((employees,index)=>(
        <tr>
      <th scope="row" key={index}>
        {index+1}
      </th>
      <td>{employees.name}</td>
      <td>{employees.username}</td>
      <td>{employees.email}</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
      ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
