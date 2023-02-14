import React from 'react'
import '../stylesheets/adduser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserApi } from '../service/api';

const AddUser = () => {
 
  const defaultUser = {
    firstname : '',
    lastname : ''
  }

  const [user, setUser] = useState(defaultUser)
  const navigate = useNavigate();

  const valueChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const addUser = async() => {
    await addUserApi(user);
    navigate('/allusers')
  }

  return (
    <div className='adduser'>
      <h2>Add User</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputText1" className="form-label">First Name</label>
          <input onChange={(e) => {valueChange(e)}} type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" name='firstname'/>
        </div>
        <div className="mb-3">
          <label for="exampleInputText2" className="form-label">Last Name</label>
          <input onChange={(e) => {valueChange(e)}}  type="text" className="form-control" id="exampleInputText2" aria-describedby="textHelp" name='lastname'/>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => {addUser()}} >Submit</button>
      </form>
    </div>
  )
}

export default AddUser