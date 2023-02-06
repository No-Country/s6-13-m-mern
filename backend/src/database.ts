import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const db = process.env.MONGODB_URI || ""

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('Connection successfully')
    } catch (error) {
        console.error('Failed to connect to MongoDB')
    }
}