import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'

type AppLayoutContainerProps = {
  header: JSX.Element
  allDataChart: JSX.Element
  themeDataChart: JSX.Element
  defaultContent: JSX.Element
}

const AppLayoutContainer = ({
  header,
  allDataChart,
  themeDataChart,
  defaultContent,
}: AppLayoutContainerProps) => {
  const data: State = useSelector((state: RootState) => state.data)
  console.log(data)

  return (
    <div className="App">
      <div className="header">{header}</div>
      <div className="content">
        {data.campusName ? (
          <>
            <div className="chart">{allDataChart}</div>
            <div className="chart">{themeDataChart}</div>
          </>
        ) : (
          <div className="default">{defaultContent}</div>
        )}
      </div>
      <div className="footer">이것은 푸터</div>
    </div>
  )
}

export default AppLayoutContainer
