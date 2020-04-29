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
  padding-top: 7rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  width: inherit;
  min-height: 90vh;
`

const Header = styled.div`
  position: fixed;
  display: flex;
  padding-top: 2rem;
  width: inherit;
  justify-content: space-between;
  background: #ffffff;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const Footer = styled.div`
  width: initial;
  background-color: #f6f9fc;
  padding: 2rem 0;
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
      <Footer>{footer}</Footer>
    </>
  )
}

export default AppLayoutContainer
