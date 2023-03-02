import styled from '@emotion/styled'
import React from 'react'
import { Row } from './components/lib'
import { useAuth } from './context/auth-context'
import { ProjectListView } from './views/project-list'
import { ReactComponent as SoftwareLogo } from '@/assets/software-logo.svg'
import { Dropdown, Menu, MenuProps } from 'antd'

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={logout}>退出账号</a>
    }
  ]
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
          <HeaderItem>logo</HeaderItem>
          <HeaderItem>项目</HeaderItem>
          <HeaderItem>用户</HeaderItem>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>HI,{user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListView />
      </Main>
    </Container>
  )
}

const HeaderItem = styled.h3`
  margin-right: 3rem;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main``
