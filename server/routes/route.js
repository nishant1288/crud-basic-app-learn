import express from 'express';

import {addUser, getUser, getSingleUser, editUser, deleteUser} from '../controller/userController.js'

const router = express.Router();

router.post('/adduser', addUser);
router.get('/allusers', getUser);
router.get('/edituser/:id', getSingleUser )
router.put('/edituser/:id', editUser )
router.delete('/allusers/:id', deleteUser)

export default router;