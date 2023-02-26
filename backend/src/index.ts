import app from './app'
import dotenv from 'dotenv'

import { connectDB } from './database'
// import { userMockService } from './services/mockups/userMockService'
// // import { consortiumMockService } from './services/mockups/consortiumMockService'
// import { amenityMockService } from './services/mockups/amenityMockService'
// import { reserveMockService } from './services/mockups/reserveMockService'
// import { scheduleMockService } from './services/mockups/scheduleMockService'

dotenv.config()

const port = process.env.PORT || 3001

// eslint-disable-next-line @typescript-eslint/no-floating-promises
connectDB()

export const server = app.listen(port, async () => {
    // await userMockService()
    // //    await consortiumMockService()
    // await amenityMockService()
    // await reserveMockService()
    // await scheduleMockService()
    console.log(`Server listening on port ${port}`)
})
