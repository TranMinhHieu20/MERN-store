// src/components/PrivateRoute.jsx
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, requiredAdmin = false }) => {
  const user = useSelector((state) => state.user)

  // Nếu chưa đăng nhập
  if (!user?.access_token) {
    return <Navigate to="/sign-in" replace />
  }

  // Nếu cần quyền admin mà user không phải admin
  if (requiredAdmin && !user?.isAdmin) {
    return <Navigate to="/" replace />
  }

  // Nếu hợp lệ, render children
  return children
}

export default PrivateRoute
