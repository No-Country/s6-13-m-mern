import { Router } from 'express'
import {
    changePaymentStatus,
    createPayment,
    getUserPayments,
} from '../controllers/payment'
import { getConsortiumPayments } from '../controllers/payment/getConsortiumPayments'
import {
    compareIds,
    createPaymentValidation,
    validateAdmin,
    validateToken,
} from '../middlewares'

const router = Router()

router.post(
    '/createPayment/:id',
    validateToken,
    compareIds,
    createPaymentValidation,
    createPayment
)
router.get('/consortiumPayments/:id', validateAdmin, getConsortiumPayments)
router.get('/getUserPayments/:id', validateToken, compareIds, getUserPayments)
router.put('/changePaymentStatus/:id', validateAdmin, changePaymentStatus)
export default router
