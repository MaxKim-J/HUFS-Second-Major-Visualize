import React, { useState } from 'react'
import Header from '../header/Header'
import { getDataByInput } from '../../reducer/data'
import { useDispatch } from 'react-redux'
import admissionArr from '../../config/admissions'

const HeaderContainer = () => {
  const [showArrow, setShowArrow] = useState(true)
  const dispatch = useDispatch()

  const onGetDataByInput = (campusName: string, admission: number): void => {
    if (campusName && admission) {
      dispatch(getDataByInput(campusName, admission))
      setShowArrow(false)
    } else {
      alert('학번과 캠퍼스 모두 입력해주세요')
    }
  }

  return (
    <Header
      admissionArr={admissionArr}
      onGetDataByInput={onGetDataByInput}
      showArrow={showArrow}
    />
  )
}

export default HeaderContainer
