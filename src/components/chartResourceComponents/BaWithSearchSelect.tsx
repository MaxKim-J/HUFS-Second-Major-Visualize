import React from 'react'
import { semesterTheme } from '../../config/themes'
import WithSearchSelect from './WithSearchSelect'

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
    <WithSearchSelect
      useIcon={true}
      themeArr={semesterTheme}
      callFunction={setSelectedSemester}
    />
  )
}

export default BaWithSearchSelect
