import React from 'react'
import HeaderContainer from './components/container/HeaderContainer'
import AllDataChartContainer from './components/container/AllDataChartContainer'
import ThemeDataChartContainer from './components/container/ThemeDataChartContainer'
import AppLayoutContainer from './components/container/AppLayoutContainer'
import DefaultContent from './components/DefaultContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <h1>한국외대 이중전공 변경 여석 데이터 시각화 서비스</h1>
      <AppLayoutContainer
        header={<HeaderContainer />}
        allDataChart={<AllDataChartContainer />}
        themeDataChart={<ThemeDataChartContainer />}
        defaultContent={<DefaultContent />}
        footer={<Footer />}
      />
    </>
  )
}

export default App
