import React from 'react'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Content } from '../../components/Content'
import { Feedback } from '../../components/Feedback'
import { AppBar } from '../../UILibrary'
import { Footer } from '../../components/Footer'

export const LandingPage: React.FC = () => {
  return (
    <div>
      <AppBar>
        <Header />
      </AppBar>
      <Banner />
      <Content />
      <Feedback />
      <Footer />
    </div>
  )
}
