import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getUsersApi, deleteUserApi } from '../service/api'
import "../stylesheets/allusers.css"
const AllUsers = () => {

    useEffect(() => {
        getUsers();
    }, [])

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        let response = await getUsersApi();
        setUsers(response.data)
    }

    const deleteUser = async(id) => {
        await deleteUserApi(id);
        getUsers();
    }

    return (
        <div className='allusers table-responsive'>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((value) => {
                            return(
                            <tr key={value._id}>
                                <th scope="row">{value._id}</th>
                                <td>{value.firstname}</td>
                                <td>{value.lastname}</td>
                                <td><Link to = {`/edituser/${value._id}`}><button type="button" className="btn btn-success">Edit</button></Link></td>
                                <td><button type="button" className="btn btn-danger" onClick={() => {deleteUser(value._id)}}>Delete</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default AllUsers