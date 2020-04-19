import React from 'react'
import AllDataChart from '../chartComponents/AllDataChart'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducer'

const AllDataChartContainer = () => {
  const data: any = useSelector((state: RootState) => state.data)
  console.log(data)

  return <AllDataChart majorData={data.majorData.major} />
}

export default AllDataChartContainer
