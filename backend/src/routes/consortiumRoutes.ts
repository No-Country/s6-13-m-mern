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
router.put('/addUser/:consortiumId/:userId', addUserConsortium)
router.put('/add/:consortiumId/:amenityId', addAmenityConsortium)
router.put('/removeUser/:consortiumId/:userId', deleteConsortiumUser)
router.delete('/delete/:consortiumId', deleteConsortium)

export default router
