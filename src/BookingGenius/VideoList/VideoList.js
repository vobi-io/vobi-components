import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VideoItem from './VideoItem'

const VideoListContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.11);
  padding: 24px 20px;
  box-sizing: border-box;
`

const VideoListHeader = styled.h1`
  font-size: 22px;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  color: #2f3033;
  padding: 0;
  margin: 0 0 20px;
`

const VideoBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const VideoList = props =>
  props.videoData.length > 0 &&
  props.numberOfItemsInLine > 0 && (
    <VideoListContainer>
      <VideoListHeader>Latest Videos</VideoListHeader>
      <VideoBox>
        {props.videoData.map((data, index) => index < props.numberOfItemsInLine && <VideoItem data={data} key={index} />)}
      </VideoBox>
    </VideoListContainer>
  )

VideoList.propTypes = {
  videoData: PropTypes.array.isRequired,
  title: PropTypes.string,
  numberOfItemsInLine: PropTypes.number.isRequired,
}

export default VideoList
