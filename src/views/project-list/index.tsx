import React from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState } from 'react'
import { useDebounce, useDocumentTitle } from '@/utils'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useProjects } from '@/utils/project'
import { useUsers } from '@/utils/user'
import { useUrlQueryParam } from '@/utils/url'

export const ProjectListView = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId'])
  const debouncedParam = useDebounce(param, 200)

  const { isLoading, error, data: list } = useProjects(debouncedParam)
  const { data: users } = useUsers()

  useDocumentTitle('项目列表', false)

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? <Typography.Text type="danger">{error.message}</Typography.Text> : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
