import { Router } from 'express'
import {
    deleteUserController,
    editUserController,
    getAllUsersController,
    getUserController,
    registerController,
    validateUserController,
} from '../controllers'

import { registerValidate, validateToken } from '../middlewares'
import { updateValidate } from '../middlewares/checks/updateValidate'

const router = Router()

router.post('/register', registerValidate, registerController)
router.get('/validate/:id', validateUserController)
router.get('/getuser/:id', validateToken, getUserController)
router.get('/getAllUsers', getAllUsersController)
router.put('/update/:id', validateToken, updateValidate, editUserController)
router.delete('/delete/:id', validateToken, deleteUserController)

export default router
