import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Header from '../Header'
import MainSlider from '../MainSlider'
import TrendingItem from '../TrendingItem'
import Footer from '../Footer'
import Download from '../Download'
import WhatsOnComponent from '../WhatsOnComponent'
import Subscribe from '../Subscribe'
import Video from '../Video'
import PlaylistSlider from '../PlaylistSlider'

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
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

const TrendingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  justify-content: space-between;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`
const HaveToListenContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
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
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
`
const Videos = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

const HomePage =
  ({
    trendingData, haveToListenData, whatsOnVideos, whatsOnData, videoData, mainSliderData,
  }) => (
    <div>
      <Header />
      <MainSlider data={mainSliderData} />
      <TrendingContainer>
        {trendingData.map(item => (
          <TrendingItem data={item} />
        ))}
      </TrendingContainer>
      <HaveToListenContainer>
        <HeaderContainer>
          <Span size={30}>You Have To Listen</Span>
          <Span size={20}>Mixtape Madness Share Their Top Playlists</Span>
        </HeaderContainer>
        {/* <FlexDiv jc="space-between">
          {haveToListenData.map(item => (
            <ToListenPlaylist data={item} />
          ))}
        </FlexDiv> */}
        <PlaylistSlider data={haveToListenData} />
      </HaveToListenContainer>
      <Download />
      <WhatsOn>
        <HeaderContainer mb={60}>
          <Span size={30}>What's On</Span>
          <Span size={20}>Check Out The Latest Music And News This Week</Span>
        </HeaderContainer>
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
        <HeaderContainer mb={60}>
          <Span size={30}>Videos</Span>
          <Span size={20}>Mixtape Madness Share Their Top Videos This Week</Span>
        </HeaderContainer>
        <Videos>
          {videoData.map(item => (
            <Video data={item} />
          ))}
        </Videos>
      </VideosContainer>
      <Footer />
    </div>
  )

HomePage.propTypes = {
  trendingData: PropTypes.array.isRequired,
  haveToListenData: PropTypes.array.isRequired,
  whatsOnVideos: PropTypes.array.isRequired,
  whatsOnData: PropTypes.array.isRequired,
  mainSliderData: PropTypes.array.isRequired,
  videoData: PropTypes.array.isRequired,
}

export default HomePage
