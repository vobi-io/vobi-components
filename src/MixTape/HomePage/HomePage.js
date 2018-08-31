import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Header from '../Header'
import MainSlider from '../MainSlider'
import TrendingItem from '../TrendingItem'
import Footer from '../Footer'
import ToListenPlaylist from '../ToListenPlaylist'

const Span = styled.span`
  ${p => p.color && `color: ${p.color}`};
  ${p => p.bold && 'font-weight: bold'};
  ${p => p.size && `font-size: ${p.size}px`};
  ${p => p.lspacing && `letter-spacing: ${p.lspacing}px`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.width && `width: ${p.width}`};
  ${p => p.margin && 'margin: auto'};
`

const TrendingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  justify-content: space-between;
`
const HaveToListenContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`
const HaveToListenHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;
`
const HomePage = ({ trendingData, haveToListenData }) => (
  <div>
    <Header />
    <MainSlider />
    <TrendingContainer>
      {trendingData.map(item => (
        <TrendingItem data={item} />
      ))}
    </TrendingContainer>
    <HaveToListenContainer>
      <HaveToListenHeader>
        <Span size={30}>You Have To Listen</Span>
        <Span size={20}>Mixtape Madness Share Their Top Playlists</Span>
      </HaveToListenHeader>
      <FlexDiv width="87%" jc="space-between" margin>
        {haveToListenData.map(item => (
          <ToListenPlaylist data={item} />
        ))}
      </FlexDiv>
    </HaveToListenContainer>
    <Footer />
  </div>
)

HomePage.propTypes = {
  trendingData: PropTypes.array.isRequired,
  haveToListenData: PropTypes.array.isRequired,
}

export default HomePage
