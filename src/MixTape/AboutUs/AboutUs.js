import React from 'react'
import styled from 'styled-components'

import AboutUsSlider from './AboutUsSlider'
import Header from '../Header'
import Grid from './Grid'

import Footer from '../Footer'

const AboutUsContainer = styled.div`
    width:70%;
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:auto;
`

export default props => (
  <AboutUsContainer>
    About Us
    <Header />
    <AboutUsSlider />
    <Grid data={props.data} />
    <Footer />
  </AboutUsContainer>
)

