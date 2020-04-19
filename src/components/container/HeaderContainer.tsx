import React from 'react'
import Header from '../Header'
import { getDataByInput } from '../../reducer/data'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../reducer'

const HeaderContainer = () => {
  const data: any = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()
  console.log(data)

  const onGetDataByInput = (campusName: string, admission: number): void => {
    dispatch(getDataByInput(campusName, admission))
  }

  return (
    <Header
      admissionArr={data.admissionArr}
      onGetDataByInput={onGetDataByInput}
    />
  )
}

export default HeaderContainer
