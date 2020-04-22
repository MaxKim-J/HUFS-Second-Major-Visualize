import React from 'react'
import Header from '../Header'
import { getDataByInput } from '../../reducer/data'
import { useDispatch } from 'react-redux'
import admissionArr from '../../utils/admissionConfig'

const HeaderContainer = () => {
  const dispatch = useDispatch()

  const onGetDataByInput = (campusName: string, admission: number): void => {
    dispatch(getDataByInput(campusName, admission))
  }

  return (
    <Header admissionArr={admissionArr} onGetDataByInput={onGetDataByInput} />
  )
}

export default HeaderContainer
