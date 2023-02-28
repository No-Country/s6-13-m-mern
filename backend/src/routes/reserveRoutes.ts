import express from 'express'

import {
  getReserveController,
  getReserveUserController,
  postReserveController,
  deleteReserveController,
  putReserveController
} from '../controllers'

import { 
  postReserve,
  paramIdValidate
} from '../middlewares'

const router = express.Router()

/* 
http://localhost:3002/api/reserve/id/all TRAE TODOS LOS RESERVES 
http://localhost:3002/api/reserve/id/:id LOS TRAE POR SEPARADO
*/
router.get('/id/:id', getReserveController)

router.get('/idUser/:idUser', getReserveUserController)

// Post reserve
router.post('/post', postReserve, postReserveController)

// Delete reserve
router.delete('/delete/:id', paramIdValidate, deleteReserveController)

// Put reserve
router.put('/put/:id', putReserveController)

export default router