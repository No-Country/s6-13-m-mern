import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

const googleId = process.env.VITE_APP_GOOGLE_ID || ''

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
