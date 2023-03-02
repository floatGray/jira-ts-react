import React from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState, useEffect } from 'react'
import { cleanObject, useDebounce, useMount } from '@/utils'
import { useHttp } from '@/utils/http'
import styled from '@emotion/styled'

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
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
