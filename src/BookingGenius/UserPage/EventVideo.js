import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PlayIcon from '../../../assets/svg/BookingGenius/Play.svg'
import LocationIcon from '../../../assets/svg/BookingGenius/Location.svg'
import CalendarIcon from '../../../assets/svg/BookingGenius/CalendarDif.svg'

function youtube_parser(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
}

const Div = styled.div`
  cursor: pointer;
  position: relative;
`

const Thumbnail = styled.img`
  width: 468px;
  height: 276px;
  border-radius: 4px;
`

const PlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

const Icon = styled.img`
  width: 22.2px;
  height: 29.5px;
  position: absolute;
  top: 15.5px;
  left: 21.6px;
`
const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    opacity: 0.6;
    font-weight: 500;
    line-height: 1.67;
    color: #747882;
    .center{
        display: flex;
        align-items: center;
    }
`
const LocationIconHolder = styled.img`
    width: 16px;
    height: 16px;
`
const CalendarIconHolder = styled.img`
    width: 12px;
    height: 14px;
`
const Span = styled.span`
    margin-left: 8px;
    &.loc{
        margin-left: 3px;
    }
`

const EventVideo = props => (
    <Div>
        <Thumbnail src={`https://img.youtube.com/vi/${youtube_parser(props.data.url)}/0.jpg`} />
        <PlayButton>
            <Icon src={PlayIcon} alt="play-icon" />
        </PlayButton>
        <Info>
            <div className="center">
                <LocationIconHolder src={LocationIcon}/>
                <Span className="loc">{props.data.location}</Span>
            </div>
            <div className="center">
                <CalendarIconHolder src={CalendarIcon}/>
                <Span>{props.data.date}</Span>
            </div>
        </Info>
    </Div>
)

EventVideo.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventVideo
