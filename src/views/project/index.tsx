import { Link } from 'react-router-dom'
import React from 'react'

export const ProjectView = () => {
  return (
    <div>
      <h1>ProjectView</h1>
      <Link to={'/kanban'}>看板</Link>
      <Link to={'/epic'}>任务组</Link>
    </div>
  )
}
