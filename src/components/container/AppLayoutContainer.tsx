import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'
import styled, { keyframes } from 'styled-components'
import DefaultContent from '../default/DefaultContent'

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Content = styled.div`
  padding-top: 7rem;
  padding-bottom: 4rem;
  width: inherit;
  min-height: 80vh;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    padding-top: 9rem;
  }
  animation: ${boxFade} 1s 0s 1 linear alternate;
`
const Chart = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 2px solid #f4f4f4;
  border-radius: 20px;
  animation: ${boxFade} 0.5s 0s 1 linear alternate;
`
const AllDataChartContainer = React.lazy(() =>
  import('./AllDataChartContainer'),
)
const ThemeDataChartContainer = React.lazy(() =>
  import('./ThemeDataChartContainer'),
)
const BaDataChartContainer = React.lazy(() => import('./BaDataChartConatainer'))

const AppLayoutContainer = () => {
  const data: State = useSelector((state: RootState) => state.data)

  const charts: JSX.Element[] = [
    <AllDataChartContainer />,
    <ThemeDataChartContainer />,
    <BaDataChartContainer />,
  ]
  return (
    <Content>
      {data.campusName ? (
        <Suspense fallback={<div></div>}>
          {charts.map(chart => (
            <Chart>{chart}</Chart>
          ))}
        </Suspense>
      ) : (
        <DefaultContent />
      )}
    </Content>
  )
}

export default AppLayoutContainer
