import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

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

// Routes
app.get('/healthCheckApi', (_req, res: Response) => {
    res.json({ ok: 'Ok' })
})
app.use('/', (_req: Request, res: Response) => {
    res.send(`Api on https://localhost:${app.get('port')}`)
})

export default app
