import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Titles = () => {
  const [headerTitle, setheaderTitle] = useState('')
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    switch (true) {
      case path === '/':
        setheaderTitle('Home')
        break
      case path === '/about':
        setheaderTitle('About')
        break
      case path === '/contact':
        setheaderTitle('Contact')
        break
      case path === '/messages':
        setheaderTitle('Mensajes')
        break
      case path === '/features':
        setheaderTitle('Features')
        break
      case path.substring(0, 5) === '/user':
        setheaderTitle('User')
        break
      case path.substring(0, 6) === '/admin':
        setheaderTitle('Admin')
        break
      default:
        setheaderTitle('SOS Consortia')
        break
    }
  }, [location])
  return { headerTitle }
}

export default Titles
