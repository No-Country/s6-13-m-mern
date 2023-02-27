import express from 'express'

 import {
  getNotificationController,
  postNotificationController
 } from '../controllers'

// import {
//   postAmenity,
//   paramIdValidate
// } from '../middlewares'

const router = express.Router()

// Get Notification by Consortium
router.get('/id/:idConsortium', getNotificationController)

// Post Notification
router.post('/post', postNotificationController)

// Delete Notification
  router.delete('/delete/:id', )

// Put Notification
router.put('/put/:id', )

export default router