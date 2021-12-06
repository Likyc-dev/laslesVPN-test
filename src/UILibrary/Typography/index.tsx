import styled from 'styled-components'
import CheckIcon from '../../assets/images/check.svg'

export const PageHeader = styled.p`
  align-items: center;
  display: block;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-left: 0.625rem;
  margin: 0;
  flex-grow: 1;
`

export const PageHeaderBold = styled.span`
  font-weight: 700;
`

export const BannerTitle = styled.h1`
  margin: 1.6875rem 0;
  font-weight: 500;
  font-size: 3.125rem;
  color: #0b132a;
`
export const BannerTitleBold = styled.span`
  font-weight: 700;
`

export const CommonText = styled.p`
  margin: 1.25rem 0rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.875rem;
  color: #4f5665;
`
export const CommonTextBold = styled.span`
  font-weight: 500;
`

export const ContentTitle = styled.h2`
  font-size: 2.1875rem;
  text-align: center;
  font-weight: 500;
  font-color: #0b132a;
  margin-bottom: 1.25rem;
`

export const ItemTitle = styled.h5`
  margin: 1.875rem 0;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #0b132a;
`

export const ItemSubTitle = styled.h4`
  font-weight: 500;
  font-size: 1.5625rem;
  line-height: 1.875rem;
  color: #0b132a;
  padding-top: 2px;
  margin: 0;
`

export const ItemList = styled.ul`
  padding-left: 0;
  list-style: none;
  li {
    position: relative;
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.875rem;
    margin-bottom: 0.625rem;
    color: #4f5665;
    position: relative;
    padding-left: 2.375rem;
    &:before {
      background-image: url(${CheckIcon});
      width: 15px;
      height: 100%;
      content: '';
      position: absolute;
      left: 0rem;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`
export const CardName = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: #0b132a;
  margin: 0rem 0rem;
`
export const CardLocation = styled.p`
  font-size: 14px;
  color: #4f5665;
  margin: 0.3125rem 0rem;
`
export const CardRating = styled.p`
  font-size: 1rem;
  line-height: 1.875rem;
`
export const CardText = styled.p`
  margin: 0rem 0rem;
  font-size: 1rem;
  line-height: 1.875rem;
  font-weight: 400;
  color: #0b132a;
`
export const CopyRightText = styled.p`
  font-size: 1rem;
  line-height: 1.875rem;
  color: #afb5c0;
  font-weight: 400;
`
export const CopyRightTextBold = styled.span`
  font-size: 1rem;
  line-height: 1.875rem;
  color: #afb5c0;
  font-weight: 500;
`
export const FooterSubTitle = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #0b132a;
  margin: 0rem 0rem 1.25rem 0rem;
`
