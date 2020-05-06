import React from 'react'
import Emoji from '../Emoji'
import {
  FooterCopyrigths,
  FooterContent,
  FooterIntroduce,
  FooterSection,
  FooterIcons,
  FooterIcon,
  FooterWrap,
  FooterIntroduceDetail,
} from './footerStyledComponents'

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContent>
        <FooterIntroduce>
          Developed by <Emoji label="max" emoji="🧑🏻‍💻" />
          Max Kim
        </FooterIntroduce>
        <FooterIntroduceDetail>
          <div>자바스크립트 개발자이자 융소를 이중하는 고학번입니다.</div>
          <div>
            서비스에 대한 피드백, 기타 제안은 하단 메일로 부탁드리겠습니다..!
          </div>
        </FooterIntroduceDetail>
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
            HUFS Second Major 1.0.0 © Max Kim. 2020
          </FooterCopyrigths>
        </FooterSection>
      </FooterContent>
    </FooterWrap>
  )
}

export default Footer
