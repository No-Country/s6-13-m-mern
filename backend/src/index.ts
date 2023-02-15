import app from './app'
import dotenv from 'dotenv'

import { connectDB } from './database'
import { userMockService } from './services/mockups/userMockService'

dotenv.config()

const port = process.env.PORT || 3001

// eslint-disable-next-line @typescript-eslint/no-floating-promises
connectDB()

export const server = app.listen(port, async () => {
    await userMockService()
    console.log(`Server listening on port ${port}`)
})
