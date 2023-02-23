import React from 'react'
import { RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'
import Nav from '@/views/subscrib'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/navigator',
    element: <Nav />
  }
]

export default routes
