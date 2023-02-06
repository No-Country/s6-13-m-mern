import express, { Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'

dotenv.config()
const app = express()

// Settings
app.set('port', process.env.PORT || 3001)

// Middlewares
app.use(morgan('dev'))
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())

//* Testing route
app.get('/healthCheckApi', (_req, res: Response) => {
    res.json({ ok: 'Ok' })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

export default app
