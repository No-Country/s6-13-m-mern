import express from 'express'

import {
  getReserveController,
  postReserveController,
  deleteReserveController,
  putReserveController
} from '../controllers'

const router = express.Router()

/* 
http://localhost:3002/api/reserve/id/all TRAE TODOS LOS RESERVES 
http://localhost:3002/api/reserve/id/:id LOS TRAE POR SEPARADO
*/
router.get('/id/:id', getReserveController)

// Post reserve
router.post('/post', postReserveController)

// Delete reserve
router.delete('/delete/:id', deleteReserveController)

// Put reserve
router.put('/put/:id', putReserveController)

export default router