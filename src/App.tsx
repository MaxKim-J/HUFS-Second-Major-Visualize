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
