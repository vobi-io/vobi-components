import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PlayIcon from '../../../assets/svg/BookingGenius/Play.svg'
import ViewsIcon from '../../../assets/svg/MixTape/eye.svg'
import SignalBarsIcon from '../../../assets/svg/MixTape/signal-bars.svg'
import DotsIcon from '../../../assets/svg/MixTape/dots.svg'


const Container = styled.div`
  width: 375px;
  @media only screen and (max-width: 1150px) {
    width: 700px;
    margin-top: 20px;
  }
`

const PhotoContainer = styled.div`
  width: 100%
  height: 200px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  @media only screen and (max-width: 1150px) {
    height: 300px;
  }
`
const ContentContainer = styled.div`
  background-color: #EEEEEF;
  width: calc(100% - 30px);
  padding: 20px 15px;
  max-height: 65px;
  display: flex;
  justify-content: space-between;
`
const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  height: 30px;
`
const Dots = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  bottom: 10px;
  right: 10px;
  height: 22px;
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  ${p => p.jc && `justify-content: ${p.jc}`};
  ${p => p.align && `align-items: ${p.align}`};
  ${p => p.height && `height: ${p.height}`};

`
const Img = styled.img`
  ${p => p.height && `height: ${p.height}px`};
`
const Name = styled.span`
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
`
const Text = styled.span`
  color: #666666;
  font-size: 14px;
  word-break: break-word;
  ${p => p.color && `color: ${p.color}`};
  ${p => p.bold && 'font-weight: bold'};
  ${p => p.size && `font-size: ${p.size}`};
  ${p => p.lspacing && `letter-spacing: ${p.lspacing}px`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
`

const Video = ({ data }) => (
  <Container>
    <PhotoContainer picture={data.picture}>
      <Icon src={PlayIcon} />
      <Dots src={DotsIcon} />
    </PhotoContainer>
    <ContentContainer>
      <LeftSide>
        <Name>{data.songName}</Name>
        <Text>{data.songAuthor}</Text>
      </LeftSide>
      <RightSide>
        <FlexDiv>
          <Img src={ViewsIcon} alt="view" height={20} />
          <Text mt={2} ml={7} >{data.views}{' Views'}</Text>
        </FlexDiv>
        <FlexDiv jc="flex-end" height="100%" align="flex-end">
          <Img src={SignalBarsIcon} alt="bars" height={18} />
        </FlexDiv>
      </RightSide>
    </ContentContainer>
  </Container>
)

Video.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Video
