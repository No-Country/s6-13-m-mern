import app from "./app";
import { connectDB } from "./database";
import dotenv from 'dotenv'

dotenv.config()

connectDB()
app.listen(app.get("port"), () =>  console.log(`Server listening on port ${app.get("port")}`));
