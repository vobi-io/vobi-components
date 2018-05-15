import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PlayIcon from '../../../assets/svg/BookingGenius/Play.svg';

const ParentDiv = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
`

const Thumbnail = styled.img`
    display: block;
    width: 840px;
    height: 472.5px;
`

const PlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
    width: 95px;
    height: 95px;
    border-radius: 50%;
`

const Icon = styled.img`
    display: block;
    position: absolute;
    top: 50%;
    left: 34px;
    transform: translateY(-50%);
`

const VideoArea = props => (
    <ParentDiv>
        <Thumbnail src={props.imageUrl} />
        <PlayButton>
            <Icon src={PlayIcon} alt="play-icon" />
        </PlayButton>
    </ParentDiv>
)

VideoArea.propTypes = {
  imageUrl: PropTypes.string,
}

export default VideoArea