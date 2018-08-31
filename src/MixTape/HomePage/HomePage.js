import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Header from '../Header'
import MainSlider from '../MainSlider'
import TrendingItem from '../TrendingItem'
import Footer from '../Footer'

const TrendingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  justify-content: space-between;
`

const HomePage = ({ trendingData }) => (
  <div>
    <Header />
    <MainSlider />
    <TrendingContainer>
      {trendingData.map(item => (
        <TrendingItem data={item} />
      ))}
    </TrendingContainer>
    <Footer />
  </div>
)

HomePage.propTypes = {
  trendingData: PropTypes.object.isRequired,
}

export default HomePage
