import React from 'react'
import { AuthenticatedApp } from './authenticated-app'
import { ErrorBoundary } from './components/error-boundary'
import { FullPageError } from './components/lib'
import { useAuth } from './context/auth-context'
import { UnAuthenticatedApp } from './unauthenticated-app'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackrender={FullPageError}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </ErrorBoundary>
    </div>
  )
}

export default App
