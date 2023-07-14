import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {
const [employees,setEmployees]=useState([]);

const {id}=useParams()

useEffect(() =>{
  loadEmployees();

},[]);

const loadEmployees = async()=>{
  const result = await axios.get("http://localhost:8082/employees");
  console.log(result);
  setEmployees(result.data);
};

const deleteEmployee=async(id)=>{
  await axios.delete(`http://localhost:8082/employee/${id}`)
  loadEmployees()
}
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
        <Link className="btn btn-primary mx-2" to={`/viewemployee/${employees.id}`}>View</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/editemployee/${employees.id}`} >Edit</Link>
        <button className="btn btn-danger mx-2" onClick={()=>deleteEmployee(employees.id)}>Delete</button>
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
