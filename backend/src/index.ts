import app from "./app";
import dotenv from 'dotenv'

import { connectDB } from "./database";

dotenv.config()

const port = process.env.PORT || 3001
connectDB()
export const server = app.listen(port, async() =>  { console.log(`Server listening on port ${port}`); });
