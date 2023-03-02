import { Project } from '@/views/project-list/list'
import { useEffect } from 'react'
import { cleanObject } from '.'
import { useHttp } from './http'
import { useAsync } from './use-async'

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp()

  const { run, ...res } = useAsync<Project[]>()

  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }))
  }, [param])
  return res
}
