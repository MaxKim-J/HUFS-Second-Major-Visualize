import React from 'react'
import HeaderContainer from './components/container/HeaderContainer'
import AllDataChartContainer from './components/container/AllDataChartContainer'

const App = () => {
  return (
    <div className="App">
      <h1>한국외대 이중전공 변경 여석 데이터 시각화 서비스</h1>
      <HeaderContainer />
      {/* todo 조건부 랜더링 - 스토어에 데이터 없을때 차트 보여주지 않기 */}
      <AllDataChartContainer />
    </div>
  )
}

export default App
