import { Router } from 'express'
import {
    createConsortium,
    getConsortium,
    deleteConsortium,
    addUserConsortium,
    addAmenityConsortium,
    deleteConsortiumUser,
} from '../controllers/consortium'

const router = Router()

router.get('/get/:id', getConsortium)
router.post('/create', createConsortium)
router.put('/add/:consortiumId/:userId', addUserConsortium)
router.put('/add/:consortiumId/:amenityId', addAmenityConsortium)
router.delete('/delete/:consortiumId', deleteConsortium)
router.delete('/delete/:consortiumId/:userId', deleteConsortiumUser)

export default router
