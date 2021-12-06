import styled from 'styled-components'

export const FooterContainer = styled.div`
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 12.5rem;
  background-color: #f8f8f8;
  padding: 3.9375rem 9.35rem 6.25rem 9.375rem;
  display: flex;
`

export const FooterLeft = styled.div`
  width: 50%;
  margin: 0rem;
  flex-grow: -1;
`

export const FooterCopyRight = styled.div`
  display: block;
  width: 65%;
  margin: 0rem;
`

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
`
export const FooterLogoText = styled.p`
  margin-left: 0.625rem
  align-items: center;
  display: block;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0rem;
`
export const FooterProduct = styled.div`
  margin-right: 7.875rem;
  display: flex;
  flex-direction: column;
`
export const FooterEngage = styled.div`
  margin-right: 7.875rem;
  display: flex;
  flex-direction: column;
`

export const FooterEarn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    font-size: 1rem;
    line-height: 1.875rem;
    color: #4f5665;
  }
`

export const FooterListLink = styled.a`
  text-decoration: none;
`
