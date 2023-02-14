import axios from 'axios';

const URL = 'http://localhost:8008'

export const addUserApi = async(data) => {
    try {
       return await axios.post(`${URL}/adduser`, data)
    } catch (error) {
        console.log("Error while calling add user api")
    }
}

export const getUsersApi = async() => {
    try {
       return await axios.get(`${URL}/allusers`)
    } catch (error) {
        console.log("Error while calling get users api")
    }
}

export const getSingleUserApi = async(id) => {
    try {
        return await axios.get(`${URL}/edituser/${id}`)
    } catch (error) {
        console.log("Error while getting single user api")
    }
}

export const editUserApi = async(user, id) => {
    try {
        return await axios.put(`${URL}/edituser/${id}`, user)
    } catch (error) {
        console.log("Error while calling edit user api")
    }
}

export const deleteUserApi = async(id) => {
    try {
        return await axios.delete(`${URL}/allusers/${id}`)
    } catch (error) {
        console.log("Error while calling delete user api")
    }
}

