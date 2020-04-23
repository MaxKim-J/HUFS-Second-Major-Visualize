import React from 'react'
import ThemeDataChart from '../chartComponents/ThemeDataChart'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'

const ThemeDataChartContainer = () => {
  const data: State = useSelector((state: RootState) => state.data)

  return (
    <ThemeDataChart
      majorData={data.majorData.major}
      campusName={data.campusName}
    />
  )
}

export default ThemeDataChartContainer
