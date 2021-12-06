import React from 'react'
import styled from 'styled-components'
import {
  TitleBar,
  PageHeader,
  PageHeaderBold,
  NavItemLink,
  NavItemSignIn,
  NavItemSignUp,
} from '../../UILibrary'

import Logo from '../../assets/images/logo.svg'

const BlankDiv = styled.div`
  width: 5.1875rem;
`

export const Header: React.FC = () => {
  return (
    <TitleBar>
      <img src={Logo} alt="Logo img" width="35px" height="36px" />
      <PageHeader>
        <span>Lasles</span>
        <PageHeaderBold>VPN</PageHeaderBold>
      </PageHeader>
      <NavItemLink href="#">Pricing</NavItemLink>
      <NavItemLink href="#">Testimonials</NavItemLink>
      <BlankDiv />
      <NavItemSignIn href="#">Sign In</NavItemSignIn>
      <NavItemSignUp href="#">Sign Up</NavItemSignUp>
    </TitleBar>
  )
}
