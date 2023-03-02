import { User } from '@/views/project-list/search-panel'
import { useEffect } from 'react'
import { cleanObject } from '.'
import { useHttp } from './http'
import { useAsync } from './use-async'

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp()

  const { run, ...res } = useAsync<User[]>()

  useEffect(() => {
    run(client('users', { data: cleanObject(param || {}) }))
  }, [param])
  return res
}
