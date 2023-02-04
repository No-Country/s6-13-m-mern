import express, {Request, Response} from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// Settings
app.set("port", process.env.PORT || 3001)

// Middlewares
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Routes
app.use("/", (_req:Request, res:Response) => {
    return res.send(`Api on https://localhost:${app.get('port')}`)
})

export default app