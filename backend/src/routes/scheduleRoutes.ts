import express from 'express'

import {
  getScheduleController,
  postScheduleController,
  deleteScheduleController,
  putScheduleController
} from '../controllers'

import {
  postSchedule,
  paramIdValidate
} from '../middlewares'

const router = express.Router()

/* 
http://localhost:3002/api/schedule/id/all TRAE TODOS LOS SCHEDULE 
http://localhost:3002/api/schedule/id/:id LOS TRAE POR SEPARADO
*/
router.get('/id/:id', getScheduleController)

// Post Amenity
router.post('/post', postSchedule, postScheduleController)

// Delete Amenity
router.delete('/delete/:id', paramIdValidate, deleteScheduleController)

// Put Amenity
router.put('/put/:id', putScheduleController)

export default router