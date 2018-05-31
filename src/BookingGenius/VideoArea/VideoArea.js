import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PlayIcon from '../../../assets/svg/BookingGenius/Play.svg'
import Pin from '../../../assets/svg/BookingGenius/Pin.svg'
import Calendar from '../../../assets/svg/BookingGenius/Calendar.svg'

import moment from 'moment'


const ParentDiv = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
`

const Thumbnail = styled.img`
    display: block;
    width: ${props => (props.width ? props.width : '840px')};
    height: ${props => (props.height ? props.height : '475px')};
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
const PinIcon = styled.img`
    width: 12px;
    height: 16px;
    margin-right:5px;
`
const Date = styled.span`
    opacity: 0.6;
    font-family: Raleway;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: left;
    color: #747882;
`

const CalendarIcon = styled.img`  
    width: 13px;
    height: 14px;
    margin-right:5px;
`

const DateLocationWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:5px;
`
const Destination = styled.div`
  display:flex;
  align-items:center;
`

const VideoArea = props => (
  <ParentDiv>
    <Thumbnail
      src={props.imageUrl}
      width={props.width}
      height={props.height}
    />
    {props.Playable &&
      <PlayButton>
        <Icon src={PlayIcon} alt="play-icon" />
      </PlayButton>
    }
    {props.enableLocation && props.enableCalendar &&
      <DateLocationWrapper>
        <Destination>
          <PinIcon src={Pin} alt="pin-icon" />
          <Date>Orlando, FL</Date>
        </Destination>
        <Destination>
          <CalendarIcon src={Calendar} alt="calendar-icon" />
          <Date>{moment(props.createdAt).format('DD/MM/YYYY')}</Date>
        </Destination>
      </DateLocationWrapper>
    }
  </ParentDiv>
)

VideoArea.propTypes = {
  imageUrl: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  Playable: PropTypes.bool,
  enableLocation: PropTypes.bool,
  enableCalendar: PropTypes.bool,
}
VideoArea.defaultProps = {
  Playable: true,
  enableLocation: false,
  enableCalendar: false,
}
export default VideoArea
