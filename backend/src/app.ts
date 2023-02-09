import express, { Response, Request } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import amenityRoutes from './routes/amenityRoutes'
import reserveRoutes from './routes/reserveRoutes'
import scheduleRoutes from './routes/scheduleRoutes'

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
app.get('/healthCheckApi', (_req: Request, res: Response) => {
    res.json({ ok: 'Ok' })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/amenity', amenityRoutes)
app.use('/api/reserve', reserveRoutes)
app.use('/api/schedule', scheduleRoutes)

export default app
