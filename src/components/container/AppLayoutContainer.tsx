import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'
import styled from 'styled-components'
import DefaultContent from '../default/DefaultContent'

const AllDataChartContainer = React.lazy(() =>
  import('./AllDataChartContainer'),
)
const ThemeDataChartContainer = React.lazy(() =>
  import('./ThemeDataChartContainer'),
)
const BaDataChartContainer = React.lazy(() => import('./BaDataChartConatainer'))

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

const AppLayoutContainer = () => {
  const data: State = useSelector((state: RootState) => state.data)

  return (
    <Content>
      {data.campusName ? (
        <>
          <Suspense fallback={<DefaultContent />}>
            <Chart>
              <AllDataChartContainer />
            </Chart>
            <Chart>
              <ThemeDataChartContainer />
            </Chart>
            <Chart>
              <BaDataChartContainer />
            </Chart>
          </Suspense>
        </>
      ) : (
        <div className="default">
          <DefaultContent />
        </div>
      )}
    </Content>
  )
}

export default AppLayoutContainer
