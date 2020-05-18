import React from 'react'
import BaDataChart from '../chartComponents/BaDataChart'
import { useSelector, useDispatch } from 'react-redux'
import { getBaDataByInput } from '../../reducer/data'
import { RootState } from '../../reducer'
import { State } from '../../../@types/reducer.d'

const BaDataChartContainer = () => {
  const data: State = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()

  const onGetBaDataByInput = (semester: string): void => {
    dispatch(getBaDataByInput(semester))
  }

  return (
    <BaDataChart baData={data.baData} onGetBaDataByInput={onGetBaDataByInput} />
  )
}

export default BaDataChartContainer
