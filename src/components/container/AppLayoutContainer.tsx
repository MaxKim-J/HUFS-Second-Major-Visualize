import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'
import styled from 'styled-components'

type AppLayoutContainerProps = {
  header?: JSX.Element
  allDataChart: JSX.Element
  themeDataChart: JSX.Element
  baDataChart: JSX.Element
  defaultContent: JSX.Element
}

const Content = styled.div`
  padding-top: 7rem;
  padding-bottom: 4rem;
  width: inherit;
  min-height: 80vh;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    padding-top: 9rem;
  }
`

const Chart = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 2px solid #f4f4f4;
  border-radius: 20px;
`

const AppLayoutContainer = ({
  allDataChart,
  themeDataChart,
  defaultContent,
  baDataChart,
}: AppLayoutContainerProps) => {
  const data: State = useSelector((state: RootState) => state.data)

  return (
    <Content>
      {data.campusName ? (
        <>
          <Chart>{themeDataChart}</Chart>
          <Chart>{allDataChart}</Chart>
          <Chart>{baDataChart}</Chart>
        </>
      ) : (
        <div className="default">{defaultContent}</div>
      )}
    </Content>
  )
}

export default AppLayoutContainer
