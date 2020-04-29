import React from 'react'
import styled from 'styled-components'

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const FooterIcons = styled.div``

const FooterIntroduce = styled.div`
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  font-weight: bold;
`

const Footer = () => {
  return (
    <>
      <FooterIntroduce>developed by 🧑🏻‍💻Max Kim</FooterIntroduce>
      <div>자바스크립트 개발자, 융소 이중하는 고학번</div>
      <FooterContent>
        <FooterIcons>
          <span>깃헙</span>
          <span>이멜</span>
          <span>개발블로그</span>
        </FooterIcons>
        <div>©Max Kim. 2020</div>
      </FooterContent>
    </>
  )
}

export default Footer
