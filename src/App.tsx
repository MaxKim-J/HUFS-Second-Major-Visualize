import React from 'react'
import HeaderContainer from './components/container/HeaderContainer'
import AppLayoutContainer from './components/container/AppLayoutContainer'
import Footer from './components/footer/Footer'
import '../src/style/font.css'
import '../src/style/global.css'
import styled from 'styled-components'

const AppWrap = styled.div`
  width: 85%;
  margin: 0 auto;

  @media screen and (max-width: 770px) {
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    width: 95%;
  }
`

const App = () => {
  return (
    <>
      <HeaderContainer />
      <AppWrap>
        <AppLayoutContainer />
      </AppWrap>
      <Footer />
    </>
  )
}

export default App
