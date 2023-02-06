import { Router } from 'express'
import { getAllUsers, getUser, register } from '../controllers'

const router = Router()

router.post('/register', register)
router.get('/getuser/:id', getUser)
router.get('/getAllUsers', getAllUsers)

export default router
