import React, { useEffect } from 'react'
import '../stylesheets/adduser.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUserApi, getSingleUserApi } from '../service/api';

const EditUser = () => {

    const defaultUser = {
        firstname: '',
        lastname: ''
    }

    const [user, setUser] = useState(defaultUser)
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, [] )

    const loadUser = async() => {
        const response = await getSingleUserApi(id);
        setUser(response.data)
       
    }

    const valueChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const editUser = async () => {
        await editUserApi(user, id);
        navigate('/allusers')
    }

   

    return (
        <div className='adduser'>
            <h2>Edit User</h2>
            <form>
                <div class="mb-3">
                    <label for="exampleInputText1" class="form-label">First Name</label>
                    <input onChange={(e) => { valueChange(e) }} type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" name='firstname' value={user.firstname}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputText2" class="form-label">Last Name</label>
                    <input onChange={(e) => { valueChange(e) }} type="text" className="form-control" id="exampleInputText2" aria-describedby="textHelp" name='lastname' value={user.lastname}/>
                </div>
                <button type="button" class="btn btn-primary" onClick={() => { editUser() }} >Submit</button>
            </form>
        </div>
    )
}

export default EditUser