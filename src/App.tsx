import React from 'react'
import { AuthenticatedApp } from './authenticated-app'
import { useAuth } from './context/auth-context'
import { UnAuthenticatedApp } from './unauthenticated-app'
import { LoginScreen } from './unauthenticated-app/login'

function App() {
  const { user } = useAuth()
  return <div className="App">{user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}</div>
}

export default App
