import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'
import styled from 'styled-components'

type AppLayoutContainerProps = {
  header: JSX.Element
  allDataChart: JSX.Element
  themeDataChart: JSX.Element
  defaultContent: JSX.Element
  footer?: JSX.Element
}

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 4rem;
`

const Header = styled.div`
  position: fixed;
`

const AppLayoutContainer = ({
  header,
  allDataChart,
  themeDataChart,
  defaultContent,
  footer,
}: AppLayoutContainerProps) => {
  const data: State = useSelector((state: RootState) => state.data)

  return (
    <>
      <Header>{header}</Header>
      <Content>
        {data.campusName ? (
          <>
            <div className="chart">{allDataChart}</div>
            <div className="chart">{themeDataChart}</div>
          </>
        ) : (
          <div className="default">{defaultContent}</div>
        )}
      </Content>
      <div className="footer">{footer}</div>
    </>
  )
}

export default AppLayoutContainer
