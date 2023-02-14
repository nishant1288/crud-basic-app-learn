
import { request, response } from 'express';
import UserInfo from '../schema/userSchema.js'

export const addUser = async(request, response) => {

    const user = request.body;
    const validatedUser = new UserInfo(user);
    
    try {
       await validatedUser.save();
       response.status(201).json(validatedUser);
    } catch (error) {
        response.status(409).json({message : error.message});
    }
}

export const getUser = async(request, response) => {
    try {
        const allUsers = await UserInfo.find({});
        response.status(200).json(allUsers);
    } catch (error) {
        response.status(404).json({message : error.message})
    }
}

export const getSingleUser = async(request, response) => {
    try {
        // const singleUser = await UserInfo.find({_id : request.params.id})
        const singleUser = await UserInfo.findById(request.params.id)
        response.status(200).json(singleUser);
    } catch (error) {
        response.status(404).json({message : error.message})
    }
}

export const editUser = async(request, response) => {
    const user = request.body;
    const editUser = new UserInfo(user)

    try {
        await UserInfo.updateOne({_id: request.params.id}, editUser)
        response.status(201).json(editUser)
    } catch (error) {
        response.status(409).json({message : error.message})
    }
}

export const deleteUser = async(request, response) => {
    try {
        await UserInfo.deleteOne({_id : request.params.id})
        response.status(200).json({message : "deleted"})
    } catch (error) {
        response.status(409).json({message : error.message})
    }
}