import express from 'express'

 import {
  getNotificationController,
  postNotificationController,
  deleteNotificationController,
  putNotificationController
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
  router.delete('/delete/:id', deleteNotificationController)

// Put Notification
router.put('/put/:id', putNotificationController)

export default router