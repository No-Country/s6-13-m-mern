import { Router } from 'express'
import {
    createConsortium,
    getConsortium,
    deleteConsortium,
    addUserConsortium,
    deleteConsortiumUser,
} from '../controllers/consortium'

const router = Router()

router.get('/get/:userId', getConsortium)
router.post('/create', createConsortium)
router.put('/add/:consortiumId/:userId', addUserConsortium)
router.delete('/delete/:consortiumId', deleteConsortium)
router.delete('/delete/:consortiumId/:userId', deleteConsortiumUser)

export default router
