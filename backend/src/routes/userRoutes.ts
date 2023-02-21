import { Router } from 'express'
import {
    deleteUserController,
    editUserController,
    getAllUsersController,
    getUserController,
    registerController,
    removeFromConsortium,
    validateUserController,
} from '../controllers'
import { renewUserToken } from '../controllers/user/renewUserToken'

import {
    registerValidate,
    validateToken,
    updateValidate,
    paramIdValidate,
    compareIds,
} from '../middlewares'

const router = Router()

router.post('/register', registerValidate, registerController)
router.get(
    '/validate/:id',
    validateToken,
    paramIdValidate,
    compareIds,
    validateUserController
)
router.get('/renewToken/:id', paramIdValidate, compareIds, renewUserToken)
router.get('/getuser/:id', validateToken, paramIdValidate, getUserController)
router.get('/getAllUsers', getAllUsersController)
router.put(
    '/update/:id',
    validateToken,
    paramIdValidate,
    compareIds,
    updateValidate,
    editUserController
)
router.delete(
    '/delete/:id',
    validateToken,
    paramIdValidate,
    compareIds,
    deleteUserController
)

router.put(
    '/removeFromConsortium/:id/:consortiumID',
    validateToken,
    paramIdValidate,
    compareIds,
    removeFromConsortium
)

export default router
