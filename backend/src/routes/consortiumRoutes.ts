import { Router } from 'express'
import {
    createConsortium,
    getConsortium,
    deleteConsortium,
    addUserConsortium,
    deleteConsortiumUser,
} from '../controllers/consortium'

const router = Router()

router.get('/get', getConsortium)
router.post('/create', createConsortium)
router.post('/add', addUserConsortium)
router.delete('/delete/consortium', deleteConsortium)
router.delete('/delete/user', deleteConsortiumUser)

export default router
