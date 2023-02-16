import dotenv from 'dotenv'
dotenv.config()

export const dbUrl = import.meta.env.VITE_LOCAL_BASE_URL || process.env.VITE_LOCAL_BASE_URL || ''
