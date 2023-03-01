import React from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState, useEffect } from 'react'
import { cleanObject, useDebounce, useMount } from '@/utils'
import { useHttp } from '@/utils/http'

export const ProjectListView = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouncedParam = useDebounce(param, 200)
  const [list, setList] = useState([])
  const client = useHttp()

  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList)
  }, [debouncedParam])

  useMount(() => {
    client('users').then(setUsers)
  })
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
