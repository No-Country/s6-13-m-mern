import express from 'express'

import {
  getAmenityController,
  postAmenityController,
  deleteAmenityController,
  putAmenityController
} from '../controllers'

const router = express.Router()

/* 
http://localhost:3002/api/amenity/id/all TRAE TODOS LOS AMENITIES 
http://localhost:3002/api/amenity/id/:id LOS TRAE POR SEPARADO
*/
router.get('/id/:id', getAmenityController)

// Post Amenity
router.post('/post', postAmenityController)

// Delete Amenity
router.delete('/delete/:id', deleteAmenityController)

// Put Amenity
router.put('/put/:id', putAmenityController)

export default router