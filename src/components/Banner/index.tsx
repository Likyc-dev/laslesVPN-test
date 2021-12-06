import React from 'react'

import {
  Container,
  BannerContainer,
  BannerTitle,
  BannerTitleBold,
  CommonText,
  CommonTextBold,
  GetStartedLink,
  LeftColumn,
} from '../../UILibrary'

import Illustraion from '../../assets/images/illustration.svg'

export const Banner: React.FC = () => {
  return (
    <Container>
      <BannerContainer>
        <LeftColumn>
          <BannerTitle>
            Want anything to be easy with{' '}
            <BannerTitleBold>LaslesVPN.</BannerTitleBold>
          </BannerTitle>
          <CommonText>
            Provide a network for all your needs with ease and fun using{' '}
            <CommonTextBold>LaslesVPN</CommonTextBold> discover interesting
            features from us.
          </CommonText>
          <GetStartedLink>Get Started</GetStartedLink>
        </LeftColumn>
        <div>
          <img src={Illustraion} alt="Illustration" />
        </div>
      </BannerContainer>
    </Container>
  )
}
