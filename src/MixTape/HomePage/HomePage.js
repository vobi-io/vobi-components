import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Header from '../Header'
import MainSlider from '../MainSlider'
import TrendingItem from '../TrendingItem'
import Footer from '../Footer'
import ToListenPlaylist from '../ToListenPlaylist'
import Download from '../Download'
import WhatsOnComponent from '../WhatsOnComponent'
import Subscribe from '../Subscribe'
import Video from '../Video'

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
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
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
const WhatsOn = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`
const SubscribeContainer = styled.div`
  margin-top: 100px;
`
const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  margin-bottom: 100px;
`

const HomePage =
  ({
    trendingData, haveToListenData, whatsOnVideos, whatsOnData, videoData,
  }) => (
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
        <FlexDiv jc="space-between">
          {haveToListenData.map(item => (
            <ToListenPlaylist data={item} />
          ))}
        </FlexDiv>
      </HaveToListenContainer>
      <Download />
      <WhatsOn>
        <HaveToListenHeader>
          <Span size={30}>What's On</Span>
          <Span size={20}>Check Out The Latest Music And News This Week</Span>
        </HaveToListenHeader>
        <FlexDiv jc="space-between" mb={33}>
          {
            whatsOnVideos.map(item => (
              <WhatsOnComponent data={item} />
            ))
          }
        </FlexDiv>
        <FlexDiv jc="space-between">
          {whatsOnData.map(item => (
            <WhatsOnComponent data={item} />
          ))}
        </FlexDiv>
      </WhatsOn>
      <SubscribeContainer>
        <Subscribe />
      </SubscribeContainer>
      <VideosContainer>
        <HaveToListenHeader>
          <Span size={30}>Videos</Span>
          <Span size={20}>Mixtape Madness Share Their Top Videos This Week</Span>
        </HaveToListenHeader>
        <FlexDiv jc="space-between">
          {videoData.map(item => (
            <Video data={item} />
          ))}
        </FlexDiv>
      </VideosContainer>
      <Footer />
    </div>
  )

HomePage.propTypes = {
  trendingData: PropTypes.array.isRequired,
  haveToListenData: PropTypes.array.isRequired,
  whatsOnVideos: PropTypes.array.isRequired,
  whatsOnData: PropTypes.array.isRequired,
}

export default HomePage
