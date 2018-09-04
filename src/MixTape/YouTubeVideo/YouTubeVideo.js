import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


function youtubeParser(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}


const Video = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  margin-bottom: 40px;

  &:before {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
  &:after {
    display: block;
    clear: both;
    content: '';
  }
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const YouTubeVideo = ({ url }) => (
  <Video>
    <Iframe
      src={`https://www.youtube.com/embed/${youtubeParser(url)}?modestbranding=1&rel=0`}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </Video>
)

YouTubeVideo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default YouTubeVideo
