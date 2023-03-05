import { Link, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'
import React from 'react'
import { KanbanView } from '@/views/kanban'
import { EpicView } from '@/views/epic'

export const ProjectView = () => {
  return (
    <div>
      <h1>ProjectView</h1>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="/" element={<Navigate to="kanban" />} />
        <Route path="kanban" element={<KanbanView />} />
        <Route path="epic" element={<EpicView />} />
      </Routes>
    </div>
  )
}
