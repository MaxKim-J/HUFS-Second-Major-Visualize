import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
  width: initial;
  background-color: #f6f9fc;
  padding: 2rem 0;
  border-top: 1px solid #ededed;
`

const FooterContent = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    width: 95%;
  }
`

const FooterIcons = styled.div`
  display: flex;
`

const FooterIcon = styled.div`
  cursor: pointer;
  margin-right: 0.8rem;
  img {
    width: 2.2rem;
    height: auto;
  }
`

const FooterCopyrigths = styled.div`
  font-size: 0.4rem;
`

const FooterIntroduce = styled.div`
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  font-weight: bold;
`

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContent>
        <FooterIntroduce>Developed by 🧑🏻‍💻Max Kim</FooterIntroduce>
        <div>자바스크립트 개발자, 융소 이중하는 고학번</div>
        <FooterSection>
          <FooterIcons>
            <FooterIcon>
              <a href="https://github.com/MaxKim-J">
                <img
                  src="https://img.icons8.com/color/144/000000/github-2.png"
                  alt="github"
                />
              </a>
            </FooterIcon>
            <FooterIcon>
              <a href="mailto:hwaseen@gmail.com">
                <img
                  src="https://img.icons8.com/color/144/000000/gmail.png"
                  alt="gmail"
                />
              </a>
            </FooterIcon>
            <FooterIcon>
              <a href="https://maxkim-j.github.io/">
                <img
                  src="https://img.icons8.com/color/150/000000/devpost.png"
                  alt="blog"
                />
              </a>
            </FooterIcon>
          </FooterIcons>
          <FooterCopyrigths>
            HUFS Second Major Visaulize © Max Kim. 2020
          </FooterCopyrigths>
        </FooterSection>
      </FooterContent>
    </FooterWrap>
  )
}

export default Footer
