import React from 'react'
import {
  FooterContainer,
  FooterLeft,
  FooterCopyRight,
  FooterLogo,
  FooterLogoText,
  PageHeaderBold,
  CommonText,
  CommonTextBold,
  CopyRightText,
  CopyRightTextBold,
  FooterProduct,
  FooterList,
  FooterListLink,
  FooterSubTitle,
  FooterEngage,
  FooterEarn,
} from '../../UILibrary'

import Logo from '../../assets/images/logo.svg'

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLogo>
          <img src={Logo} alt="Logo img" width="35px" height="36px" />
          <FooterLogoText>
            <span>Lasles</span>
            <PageHeaderBold>VPN</PageHeaderBold>
          </FooterLogoText>
        </FooterLogo>
        <FooterCopyRight>
          <CommonText>
            <CommonTextBold>LaslesVPN</CommonTextBold> is a private virtual
            network that has unique features and has high security.
          </CommonText>
          <CopyRightText>
            ©2020Lasles<CopyRightTextBold>VPN</CopyRightTextBold>
          </CopyRightText>
        </FooterCopyRight>
      </FooterLeft>
      <FooterProduct>
        <FooterSubTitle>Product</FooterSubTitle>
        <FooterList>
          <FooterListLink href="#">
            <li>Download</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Pricing</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Location</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Server</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Countries</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Blog</li>
          </FooterListLink>
        </FooterList>
      </FooterProduct>
      <FooterEngage>
        <FooterSubTitle>Engage</FooterSubTitle>
        <FooterList>
          <FooterListLink href="#">
            <li>LaslesVPN?</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>FAQ</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Tutorials</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>About Us</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Privacy Policy</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Terms of Service</li>
          </FooterListLink>
        </FooterList>
      </FooterEngage>
      <FooterEarn>
        <FooterSubTitle>Earn Money</FooterSubTitle>
        <FooterList>
          <FooterListLink href="#">
            <li>Affiliate</li>
          </FooterListLink>
          <FooterListLink href="#">
            <li>Become Partner</li>
          </FooterListLink>
        </FooterList>
      </FooterEarn>
    </FooterContainer>
  )
}
