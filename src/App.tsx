import React from 'react'
import HeaderContainer from './components/container/HeaderContainer'
import AllDataChartContainer from './components/container/AllDataChartContainer'
import ThemeDataChartContainer from './components/container/ThemeDataChartContainer'
import AppLayoutContainer from './components/container/AppLayoutContainer'
import DefaultContent from './components/DefaultContent'
import Footer from './components/Footer'
import '../src/font.css'
import '../src/global.css'
import styled from 'styled-components'

const AppWrap = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    width: 90%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const App = () => {
  return (
    <AppWrap>
      <AppLayoutContainer
        header={<HeaderContainer />}
        allDataChart={<AllDataChartContainer />}
        themeDataChart={<ThemeDataChartContainer />}
        defaultContent={<DefaultContent />}
        footer={<Footer />}
      />
    </AppWrap>
  )
}

export default App
