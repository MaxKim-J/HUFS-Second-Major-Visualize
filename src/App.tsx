import React from 'react'
import { getDataByInput } from './reducer/data'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './reducer'

function App() {
  const dispatch = useDispatch()
  dispatch(getDataByInput('seoul', 15))
  const data = useSelector((state: RootState) => state.data.secondMajorData)
  console.log(data)

  return (
    <div className="App">
      <h1>한국외대 이중전공 변경 여석 데이터 시각화 서비스</h1>
    </div>
  )
}

export default App
