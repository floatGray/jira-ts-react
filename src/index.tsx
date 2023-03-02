import React from 'react'
import ReactDOM from 'react-dom/client'
import { loadServer, DevTools } from 'jira-dev-tool'
import 'antd/dist/antd'

import App from '@/App'
import { AppProviders } from './context'

loadServer(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <AppProviders>
      <DevTools />
      <App />
    </AppProviders>
  )
})
