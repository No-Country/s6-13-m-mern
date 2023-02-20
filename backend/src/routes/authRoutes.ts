import { Router } from 'express'
import {
    changePasswordController,
    forgetPasswordController,
    loginController,
} from '../controllers'
import {
    loginValidate,
    validateToken,
    changePasswordValidate,
    compareIds,
} from '../middlewares'

const router = Router()

router.post('/login', loginValidate, loginController)
router.post('/forgetPassword', forgetPasswordController)
router.post(
    '/changePassword/:id',
    validateToken,
    compareIds,
    changePasswordValidate,
    changePasswordController
)
export default router
