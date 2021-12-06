import styled from 'styled-components'

const NavItemBase = styled.a`
  font-size: 1rem;
  line-height: 1.1875rem;
  text-decoration: none;
`

export const NavItemLink = styled(NavItemBase)`
  color: #4f5665;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`

export const NavItemSignIn = styled(NavItemBase)`
  color: #0b132a;
  margin-left: 1.875rem;
  margin-right: 1.875rem;
  font-weight: 500;
`

export const NavItemSignUp = styled(NavItemBase)`
  color: #f53855;
  padding: 0.8125rem 2.8125rem;
  border: solid 1px #f53855;
  border-radius: 33px;
  font-weight: 500;
`
