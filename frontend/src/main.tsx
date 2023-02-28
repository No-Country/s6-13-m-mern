import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const googleId = process.env.VITE_APP_GOOGLE_ID || ''

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleId}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
      </LocalizationProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
