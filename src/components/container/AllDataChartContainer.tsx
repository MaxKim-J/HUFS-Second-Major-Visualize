import React from 'react'
import AllDataChart from '../chartComponents/AllDataChart'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'

const AllDataChartContainer = () => {
  const data: State = useSelector((state: RootState) => state.data)

  return (
    <AllDataChart
      majorData={data.majorData.major}
      campusName={data.campusName}
    />
  )
}

export default AllDataChartContainer
