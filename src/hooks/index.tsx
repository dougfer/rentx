import React from 'react'
import { AuthProvider } from './auth'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
