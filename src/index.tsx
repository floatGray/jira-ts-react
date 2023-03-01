import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'
import { loadDevTools } from 'jira-dev-tool'

import App from '@/App'
import { AppProviders } from './context'

loadDevTools(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  root.render(
    <AppProviders>
      <App />
    </AppProviders>
  )
})
