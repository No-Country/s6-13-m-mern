import express, { Response, Request } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

// Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerSetup from './docs/swaggerOptions'

import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import consortiumRoutes from './routes/consortiumRoutes'
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
app.use('/api/consortium', consortiumRoutes)
app.use('/api/amenity', amenityRoutes)
app.use('/api/reserve', reserveRoutes)
app.use('/api/schedule', scheduleRoutes)

//* documentation
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerSetup))

export default app
