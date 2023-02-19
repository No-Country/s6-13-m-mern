import { Router } from 'express'
import {
    changePasswordController,
    forgetPasswordController,
    loginController,
} from '../controllers'
import { loginValidate, validateToken } from '../middlewares'
import { validateAccountsValidated } from '../middlewares/validateAccountsValidated'

const router = Router()

router.post('/login', loginValidate, loginController)
router.post(
    '/forgetPassword',
    forgetPasswordController
)
router.post('/changePassword/:id',
    validateAccountsValidated,
    validateToken,
    changePasswordController)
export default router
