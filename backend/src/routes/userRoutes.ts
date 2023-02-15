import { Router } from 'express'
import {
    deleteUserController,
    editUserController,
    getAllUsersController,
    getUserController,
    registerController,
    validateUserController,
} from '../controllers'
import { renewUserToken } from '../controllers/user/renewUserToken'

import {
    registerValidate,
    validateToken,
    updateValidate,
    paramIdValidate,
} from '../middlewares'

const router = Router()

router.post('/register', registerValidate, registerController)
router.get('/validate/:id', validateToken, validateUserController)
router.get('/renewToken/:id', renewUserToken)
router.get('/getuser/:id', validateToken, paramIdValidate, getUserController)
router.get('/getAllUsers', getAllUsersController)
router.put(
    '/update/:id',
    validateToken,
    paramIdValidate,
    updateValidate,
    editUserController
)
router.delete(
    '/delete/:id',
    validateToken,
    paramIdValidate,
    deleteUserController
)

export default router
