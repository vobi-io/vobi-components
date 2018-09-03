import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PlayIcon from '../../../assets/svg/BookingGenius/Play.svg'
import PlayListIcon from '../../../assets/svg/MixTape/playlist.svg'
import FollowersIcon from '../../../assets/svg/MixTape/followers.svg'

const Icon = styled.img`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
`

const Container = styled.div`
  width: 575px;
`
const PhotoContainer = styled.div`
  width: 100%
  height: 300px;
  background: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
const ContentContainer = styled.div`
  background-color: #EEEEEF;
  width: calc(100% - 30px);
  padding: 20px 15px;
  display: flex;
  height: 107px;
`
const LeftSide = styled.div`
  width: calc(40% - 15px);
  display: flex;
  flex-direction: column;
`
const Type = styled.span`
  color: #FF9D00;
  font-size: 13px;
  font-weight: bold;
`
const Name = styled.span`
  font-size: 30px;
  color: black;
`
const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: #E7E7E7;
  margin: 0px 15px;
`
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(60% - 15px);
`
const Text = styled.span`
  color: #666666;
  font-size: 14px;
  word-break: break-word;
`
const FlexDiv = styled.div`
  display: flex;
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mr && `margin-right: ${p.mr}px`};
`
const LittleIcon = styled.img`
  ${p => p.height && `height: ${p.height}px`};
  ${p => p.pointer && 'cursor: pointer'};
`
const Span = styled.span`
  color: #666666;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 2px;
`
const ToListenPlaylist = ({ data }) => (
  <Container>
    <PhotoContainer picture={data.picture}>
      <Icon src={PlayIcon} alt="play-icon" />
    </PhotoContainer>
    <ContentContainer>
      <LeftSide>
        <Type>{data.type}</Type>
        <Name>{data.name}</Name>
      </LeftSide>
      <Line />
      <RightSide>
        <Text>{data.text}</Text>
        <FlexDiv mt={18}>
          <FlexDiv mr={20}>
            <LittleIcon src={PlayListIcon} height={20} pointer />
            <Span>{data.tracksCount}{' Tracks'}</Span>
          </FlexDiv>
          <FlexDiv>
            <LittleIcon src={FollowersIcon} height={18} />
            <Span>{data.followersCount}{' Followers'}</Span>
          </FlexDiv>
        </FlexDiv>
      </RightSide>
    </ContentContainer>
  </Container>
)
ToListenPlaylist.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ToListenPlaylist
