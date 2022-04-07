import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, user }) => {
  const location = useLocation()

  if (!user) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return <>{React.cloneElement(children, { user })}</>
}

export default ProtectedRoute
