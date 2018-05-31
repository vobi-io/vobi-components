import React, { Component } from 'react'
import VideoArea from '../VideoArea'
import styled from 'styled-components'

const Container = styled.div`
    width: 838px;
    height: 388px;
    box-sizing:border-box;
    padding: 5px 25px;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
`
const VideosWrappers = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`
const Title = styled.div`
    width: 150px;
    height: 66px;
    font-family: Raleway;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 3;
    letter-spacing: normal;
    text-align: left;
    color: #2f3033;
`
const MainEvents = styled.div`
  margin-right:24px;
`
const SecondaryEvents = styled.div`
  margin-left:24px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const RecentEvnets = props => (
  <Container>
    <Title>
      Recent Events
    </Title>
    <VideosWrappers>
      <MainEvents>
        <VideoArea
          enableLocation
          enableCalendar
          width="468px"
          height="279px"
          imageUrl={('imageUrl', 'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg')}
        />
      </MainEvents>
      <SecondaryEvents>
        <VideoArea
          enableLocation
          enableCalendar
          Playable={false}
          width="275px"
          height="115px"
          imageUrl={('imageUrl', 'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg')}
        />
        <VideoArea
          enableCalendar
          enableLocation
          Playable={false}
          width="275px"
          height="115px"
          imageUrl={('imageUrl', 'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg')}
        />
      </SecondaryEvents>
    </VideosWrappers>
  </Container>
)


export default RecentEvnets
