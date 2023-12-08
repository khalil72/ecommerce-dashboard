import React, { useEffect } from 'react'
import Layout from '../../../component/main/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUser } from '../../../redux/Reducer/api';
import { map } from 'lodash';
import { useNavigate } from 'react-router-dom';

const Getdata = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { api } = useSelector((state) =>  state.api);
    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch])
    console.log(api);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
        }
      const handleClick = () =>{
          navigate('/dashbaord/api/createdata');
      } 
  return (
    <Layout>
      <div className='card container mt-5 p-3'>
      <button className='btn btn-primary d-flex  me-auto mb-3' 
      onClick={(e)=>handleClick(e.target.value)}>
         Add User
      </button>
      <table className='table table-bordered '>
      <thead>
      <tr>
       <th>sr</th>
       <th>name</th>
       <th>Email</th>
       <th>Phone</th>
       <th>Address</th>
       <th>Gender</th>
       <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {map(api ,(item , index)=>(
        <tr>
        <td>{item.id}</td>
        <td>{item.fname}{item.lname}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>{item.gender}</td>
        <td>
          <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
        </td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
    </Layout>
  )
}

export default Getdata