import { Router } from 'express'
import {
    createConsortium,
    getConsortium,
    deleteConsortium,
    addUserConsortium,
    addAmenityConsortium,
    deleteConsortiumUser,
    editConsortiumController,
} from '../controllers/consortium'
import {
    compareIds,
    updateConsortiumValidate,
    validateAdmin,
} from '../middlewares'

const router = Router()

router.get('/get/:id', getConsortium)
router.post('/create', createConsortium)
router.put('/addUser/:consortiumId/:userId', addUserConsortium)
router.put(
    '/editConsortium/:consortiumId/:id',
    validateAdmin,
    compareIds,
    updateConsortiumValidate,
    editConsortiumController
)
router.put('/add/:consortiumId/:amenityId', addAmenityConsortium)
router.put('/removeUser/:consortiumId/:userId', deleteConsortiumUser)
router.delete(
    '/delete/:consortiumId/:id',
    validateAdmin,
    compareIds,
    deleteConsortium
)

export default router
