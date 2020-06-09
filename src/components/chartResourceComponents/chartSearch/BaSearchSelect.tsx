import React from 'react'
import { semesterTheme } from '../../../config/themes'
import SearchSelect from './SearchSelect'

type BaWithSearchSelectProps = {
  onGetBaDataByInput: (semester: string) => void
}

const BaWithSearchSelect = ({
  onGetBaDataByInput,
}: BaWithSearchSelectProps) => {
  const setSelectedSemester = (semester: string) => {
    onGetBaDataByInput(semester)
  }

  return (
    <SearchSelect
      useIcon={true}
      themeArr={semesterTheme}
      callFunction={setSelectedSemester}
    />
  )
}

export default BaWithSearchSelect
