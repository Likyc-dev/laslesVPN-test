import React from 'react'
import styled from 'styled-components'
import { CardCarousel } from './Carousel'
import {
  Container,
  FeedbackTitle,
  ContentTitle,
  CommonText,
} from '../../UILibrary'

export const FeedBackContainer = styled.div`
  margin-left: 8.75rem;
`

export const Feedback: React.FC = () => {
  return (
    <Container>
      <FeedBackContainer>
        <FeedbackTitle>
          <ContentTitle>Trusted by Thousands of Happy Customer</ContentTitle>
          <CommonText style={{ textAlign: 'center' }}>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </CommonText>
        </FeedbackTitle>
        <CardCarousel />
      </FeedBackContainer>
    </Container>
  )
}
