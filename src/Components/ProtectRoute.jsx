import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectRoute({children}) {

    const userToken = sessionStorage.getItem("token")
    const userRole = sessionStorage.getItem("role")

    if(!userToken) return <Navigate to="/login" replace />
    return children
}
