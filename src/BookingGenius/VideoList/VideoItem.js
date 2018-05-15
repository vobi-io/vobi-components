import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PlayIcon from '../../../assets/svg/BookingGenius/Play.svg';

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

const ParentDiv = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:not(:last-child) {
        margin-right: 35px;
    }
`

const Thumbnail = styled.img`
    display: block;
    width: 160px;
    height: 120px;
    border-radius: 4px;
`

const PlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`

const Icon = styled.img`
    position: absolute;
    top: 5.85px;
    left: 8.75px;
    width: 9.25px;
    height: 12.3px;
    display: block;
`

const VideoItem = props => (
    <ParentDiv>
        <Thumbnail src={`https://img.youtube.com/vi/${youtube_parser(props.data.url)}/0.jpg`} />
        <PlayButton>
            <Icon src={PlayIcon} alt="play-icon" />
        </PlayButton>
    </ParentDiv>
)

VideoItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideoItem